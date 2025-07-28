import BuyCTA from "@/components/sections/buy-cta";
import CheckLists from "@/components/sections/check-lists";
import CourseDetails from "@/components/sections/course-details";
import CourseInstructor from "@/components/sections/course-instructor";
import ExclusiveFeatures from "@/components/sections/exclusive-features";
import LaidOut from "@/components/sections/laid-out";
import ProductTrailer from "@/components/sections/product-trailer";
import TitleAndDescription from "@/components/sections/title-and-description";
import WillLearn from "@/components/sections/will-learn";
import { getProductData } from '@/services/product';
import { cleanData } from '@/utils/clean-data';
import { getTranslation } from "@/constants/translation";
import { LangParamProps } from "@/types/page-component-props";

export default async function MainPage({ params }: LangParamProps) {
    const lang = (await params).lang;

    //NO TRY CATCH AS NEXT JS ERROR BOUNDARY IS HANDING IT
    const [translation, productRes] = await Promise.all([
        getTranslation(lang),
        getProductData(lang),
    ]);

    const productData = cleanData(productRes);
    if (!productData) return null;

    return (
        <main>
            {/* Title & Description */}
            <TitleAndDescription data={productData} translation={translation} />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl px-5 mx-auto mt-8">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-6 lg:space-y-10">
                    <CourseInstructor instructors={productData.sections.instructors} />
                    <LaidOut laidOutData={productData.sections.laidOut} />
                    <WillLearn willLearnData={productData.sections.willLearn} />
                    <ExclusiveFeatures exclusiveFeatures={productData.sections.exclusiveFeatures} />
                    <CourseDetails courseDetails={productData.sections.courseDetails} />
                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-6">
                    <div className="hidden lg:flex flex-col sticky top-10 bg-white border border-border p-1">
                        {productData.media.gallery && (
                            <ProductTrailer data={productData.media.gallery} />
                        )}
                        <BuyCTA cta={productData.cta_text} />
                        <CheckLists checklists={productData.checklist} translation={translation} />
                    </div>
                </div>
            </div>
        </main>
    );
}
