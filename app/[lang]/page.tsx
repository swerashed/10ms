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
import { getTranslation } from "@/constants/translation"
import { CleanedProductData } from "@/types/global"

export default async function MainPage({
    params,
}: {
    params: { lang: 'en' | 'bn' }
}) {
    const { lang } = params;

    let productData: CleanedProductData | null = null;
    let translation = null;
    let hasError = false;

    try {
        const [translationRes, productRes] = await Promise.all([
            getTranslation(lang),
            getProductData(lang)
        ]);

        translation = translationRes;
        productData = cleanData(productRes);

        if (!productData) {
            throw new Error('Invalid or incomplete product data after cleaning.');
        }

    } catch (error) {
        console.error('Error loading page data:', error);
        hasError = true;
    }

    if (hasError || !productData || !translation) {
        return <ErrorComponent />
    }

    console.log("product data", productData)

    return (
    <main>
        {/* Title & Description */}
        <TitleAndDescription data={productData} translation={translation} />
    </main>
        // <>
        //    
        //     {/* Main Content Grid */}
        //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl px-5 mx-auto mt-8">
        //         {/* Left Column - Main Content */}
        //         <div className="lg:col-span-2 space-y-6 lg:space-y-10">
        //             <CourseInstructor data={productData.sections.instructors} />
        //             <LaidOut data={productData.sections.laidOut} />
        //             <WillLearn data={productData.sections.willLearn} />
        //             <ExclusiveFeatures data={productData.sections.exclusiveFeatures} />
        //             <CourseDetails data={productData.sections.courseDetails} />
        //         </div>

        //         {/* Right Column - Sidebar */}
        //         <div className="space-y-6">
        //             <div className="hidden lg:flex flex-col sticky top-10 bg-white border border-border p-1">
        //                 {productData.media.trailer && (
        //                      <ProductTrailer trailer={productData.media.trailer} />
        //                 )}
        //                 <BuyCTA />
        //                 <CheckLists data={productData.checklist} />
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}