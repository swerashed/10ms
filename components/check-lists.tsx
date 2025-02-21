import Image from "next/image";

const CheckLists = () => {
    // 1. State hooks
    // 2. Functions/handlers
    // 3. useEffect or other hooks
    // 4. scope component or mini component
    const ListItem = () => {
        return (<div className="flex items-center mb-3 leading-5">
            <div
                className="inline-block h-[20px] w-[20px] transition-opacity duration-300 ease-in-out"
            >
                <Image
                    alt="icon"
                    loading="lazy"
                    width={20}
                    height={20}
                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png"
                />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                কোর্সটি করছেন ৩২৯৯৫ জন
            </h4>
        </div>)
    }

    return (
        <div className="hidden md:block">
            <div className="grid py-2 md:p-4">
                <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        </div>
    );
};

export default CheckLists;