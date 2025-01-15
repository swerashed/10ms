import Image from "next/image";

const TitleAndDescription = ({ title }: { title: string }) => {
    // 1. State hooks
    // 2. Functions/handlers
    // 3. useEffect or other hooks
    // 4. scope component or mini component

    return (
        <div className='relative'>
            <div className="flex flex-col justify-center flex-1 max-w-7xl mx-auto px-4 py-10 min-h-[300px]">
                <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
                    IELTS Course by Munzereen Shahid
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
                        (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
                    </span>
                </div>

                <div
                    className="text-gray-400 "
                    style={{ overflow: "hidden", height: "auto", maskImage: "none" }}
                >
                    <div>
                        <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                                Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন
                                নিন একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার
                                কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন আমাদের IELTS
                                Course-এ।{" "}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* BACKGROUND IMAGE  */}
            <Image src="https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg" alt='Background Image for IELTS Course by Munzereen Shahid' height={300} width={1280} className='absolute inset-0 h-full w-full object-cover -z-10' />
        </div>

    );
};

export default TitleAndDescription;