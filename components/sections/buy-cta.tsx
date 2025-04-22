import { CTAText } from "@/types/global";

const BuyCTA = ({cta}:{cta: CTAText}) => {
    // 1. State hooks
    // 2. Functions/handlers
    // 3. useEffect or other hooks
    // 4. scope component or mini component

    return (
        <div className="w-full lg:p-4 md:h-auto">
            <div className="relative md:static ">
                    <div className="flex flex-col w-full">
                        <div>
                            <div className="flex items-center justify-between md:flex-col md:items-start">
                                <div className="md:mb-3">
                                    <div className="inline-block text-2xl font-semibold">৳1000</div>
                                    <span className="infline-flex">
                                        <del className="ml-2 text-base font-normal md:text-xl">
                                            ৳5000
                                        </del>
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-2" />
                        </div>
                        <button className="cursor-pointer hover:bg-[#15803d] transition-all duration-300 bg-[#1cab55] whitespace-nowrap md:w-full px-8 py-2 text-white text-center rounded-md font-semibold border border-[#0000004d] flex justify-center items-center">
                          {cta.name}
                        </button>
                    </div>
            </div>
        </div>

    );
};

export default BuyCTA;