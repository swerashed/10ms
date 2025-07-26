import { cookies } from 'next/headers';
import BuyCTA from "@/components/buy-cta"
import CheckLists from "@/components/check-lists"
import CourseDetails from "@/components/course-details"
import CourseInstructor from "@/components/course-instructor"
import ExclusiveFeatures from "@/components/exclusive-features"
import LaidOut from "@/components/laid-out"
import ProductTrailer from "@/components/product-trailer"
import TitleAndDescription from "@/components/title-and-description"
import WillLearn from "@/components/will-learn"
import { getProductData } from '@/services/product';
import ErrorComponent from '@/components/common/error-component';
import { cleanData } from '@/utils/clean-data';


export default async function MainPage() {
    let lang: 'en' | 'bn' = 'en';

    // Priority 1: Cookie
    const cookieStore = cookies();
    const langCookie = (await cookieStore).get('lang')?.value as 'en' | 'bn' | undefined;
    if (langCookie) {
        lang = langCookie;
    }

    let productData = null;
    let hasError = false;

    try {
        productData = await getProductData(lang);
    } catch (error) {
        hasError = true;
    }

    if (hasError || !productData) {
        return <ErrorComponent/>
    }

    console.log("clean data", cleanData(productData))
    
   

    return (
        <>
            {/* Title & Description*/}
            <TitleAndDescription data={productData}/>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl px-5 mx-auto mt-8">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-6 lg:space-y-10">
                    {/* Instructors */}
                    <CourseInstructor />
                    {/* How the course is laid out */}
                    <LaidOut />
                    {/* What you will learn */}
                    <WillLearn />
                    {/* Course Exclusive Feature */}
                    <ExclusiveFeatures />
                    {/* Course details */}
                    <CourseDetails />
                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-6">
                    {/* Trailer, CTA & Check Lists */}
                    <div className="hidden lg:flex flex-col sticky top-10 bg-white border border-border p-1">
                        {/* <ProductTrailer /> */}
                        <BuyCTA />
                        <CheckLists />
                    </div>
                </div>
            </div>
        </>
    )
}
