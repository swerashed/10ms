import SectionTitle from "./common/section-title";

const LaidOut = () => {
    // 1. State hooks
    // 2. Functions/handlers
    // 3. useEffect or other hooks
    // 4. scope component or mini component
    const LaidOutCard = () => {
        return (
            <div className="flex flex-row items-start gap-3 m-1 ">
                <div
                    className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: 0, opacity: 1 }}
                >
                    <img
                        alt="৫০+ ভিডিও লেকচার"
                        data-original-src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png"
                        loading="lazy"
                        width={36}
                        height={36}
                        decoding="async"
                        data-nimg={1}
                        src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png"
                        style={{ color: "transparent" }}
                    />
                </div>
                <div className="flex flex-col flex-1 gap-2">
                    <h2 className="text-[18px] font-[500px] leading-[26px] text-white ">
                        ৫০+ ভিডিও লেকচার
                    </h2>
                    <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                        IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন
                        নিয়ে in-depth আলোচনা
                    </h2>
                </div>
            </div>
        )
    }

    return (
        < >
            <SectionTitle>কোর্সটি যেভাবে সাজানো হয়েছে</SectionTitle>

            <div className="grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
                <LaidOutCard />
                <LaidOutCard />
                <LaidOutCard />
                <LaidOutCard />
            </div>
        </>
    );
};

export default LaidOut;