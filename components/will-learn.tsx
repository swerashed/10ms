import CheckIcon from "./icons/check-icon";

const WillLearn = () => {
    // 1. State hooks
    // 2. Functions/handlers
    // 3. useEffect or other hooks
    // 4. scope component or mini component
    const WillLearnCard = () => {
        return (<li className="flex items-start gap-2 mb-2">
            <CheckIcon />
            <p className="flex-1">
                IELTS পরীক্ষার প্রত্যেক সেকশনের প্রশ্ন ও উত্তরের ধরন, টাইম
                ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ টিপস, ট্রিকস ও স্ট্র্যাটেজি
            </p>
        </li>)
    }

    return (
        <div className="">

            <div className="rounded-md md:border md:border-border">
                <ul className="grid pt-2 md:p-6 grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
                    <WillLearnCard />
                    <WillLearnCard />
                    <WillLearnCard />
                    <WillLearnCard />
                </ul>
            </div>
        </div>

    );
};

export default WillLearn;