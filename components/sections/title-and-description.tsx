import Image from "next/image";
import ProductTrailer from "./product-trailer";
import BuyCTA from "./buy-cta";
import CheckLists from "./check-lists";
import RichTextRenderer from "../common/rich-text-renderer";
import { TitleAndDescriptionProps } from "@/types/page-component-props";

const TitleAndDescription = async ({ data, translation }: TitleAndDescriptionProps) => {
    // 1. State hooks
    // 2. Functions/handlers
    // 3. useEffect or other hooks

    return (
        <>
            <div className='relative'>
                <div className="mobile-trailer  max-w-7xl mx-auto px-4 flex lg:hidden pt-10">
                    <ProductTrailer data={data?.media?.gallery || []} />
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
                            {translation.banner_stat}
                        </span>
                    </div>
                    <div className="!text-gray-400">

                        <RichTextRenderer html={data?.description} />
                    </div>

                </div>


                {/* BACKGROUND IMAGE  */}
                <Image src="https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg" alt='Background Image for IELTS Course by Munzereen Shahid' height={300} width={1280} className='absolute inset-0 h-full w-full object-cover -z-10' />
            </div>
            <div className="mobile-cta gap-5  max-w-7xl mx-auto px-4 flex flex-col lg:hidden pt-10">
                <BuyCTA cta={data.cta_text}/>
                <CheckLists checklists={data.checklist} translation={translation} />
            </div>
        </>

    );
};

export default TitleAndDescription;