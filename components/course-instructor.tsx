import Image from "next/image";

const CourseInstructor = () => {
    // 1. State hooks
    // 2. Functions/handlers
    // 3. useEffect or other hooks
    // 4. scope component or mini component

    return (
        <div className="flex flex-col gap-4">
            <p className="section-title text-xl font-semibold md:text-2xl">কোর্স ইন্সট্রাক্টর</p>
            <div className="flex items-center md:rounded-md md:border md:border-border overflow-hidden">
                <div className="h-full w-full max-w-[150px] flex">
                    <Image
                        alt="Instructor Munzereen Shahid"
                        priority
                        width={73}
                        height={100}
                        quality={100}
                        src="https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"
                        className="h-full w-full max-w-[150px] object-cover"
                    />
                </div>
                <div className="flex-1 ml-4  md:p-5">
                    <h3 className="text-lg">
                        Munzereen Shahid
                    </h3>
                    <div className="text-sm">
                        <p>
                            MSc (English), University of Oxford (UK);
                            <br />
                            BA, MA (English), University of Dhaka;
                            <br />
                            IELTS: 8.5
                        </p>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CourseInstructor;