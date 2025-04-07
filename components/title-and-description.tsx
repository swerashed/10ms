import Image from "next/image";
import ProductTrailer from "./product-trailer";
import BuyCTA from "./buy-cta";
import CheckLists from "./check-lists";
import { ProductData } from "@/types/global";
import RichTextRenderer from "./common/rich-text-renderer";
import { cookies } from "next/headers";
import { bannerData } from "@/constants/global";

const TitleAndDescription = async ({data}: {data: ProductData}) => {
    // 1. State hooks
    // 2. Functions/handlers
        // 2. Functions/handlers
          const cookieStore = cookies();
          const lang = (await cookieStore).get('lang')?.value as 'en' | 'bn' | undefined || "en"
    // 3. useEffect or other hooks
    // 4. scope component or mini component

    return (
        <>
            <div className='relative'>
                <div className="mobile-trailer  max-w-7xl mx-auto px-4 flex lg:hidden pt-10">
                    <ProductTrailer data={data?.media}/>
                </div>
                <div className="flex flex-col justify-center gap-3 flex-1 max-w-7xl mx-auto px-4 pb-10 lg:pt-10">
                    <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
                       {data?.title}
                    </h1>

                    <div className="flex flex-row flex-wrap gap-2 text-white">
                        <span className="inline-block">
                            <Image
                                width={130}
                                height={23}
                                alt='course-reviews'
                                className="md:w-[130px] w-[100px]"
                                src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                            />
                        </span>
                        <span className="inline-block text-sm md:text-base">
                            ({bannerData[lang]?.text})
                        </span>
                    </div>
                    <div className="!text-gray-400">
                        
                    <RichTextRenderer html={data?.description}/>
                    </div>
    
                </div>


                {/* BACKGROUND IMAGE  */}
                <Image src="https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg" alt='Background Image for IELTS Course by Munzereen Shahid' height={300} width={1280} className='absolute inset-0 h-full w-full object-cover -z-10' />
            </div>
            <div className="mobile-cta gap-5  max-w-7xl mx-auto px-4 flex flex-col lg:hidden pt-10">
                <BuyCTA />
                <CheckLists />
            </div>
        </>

    );
};

export default TitleAndDescription;