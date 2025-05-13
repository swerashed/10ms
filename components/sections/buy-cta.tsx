import { BuyCTAProps } from "@/types/page-component-props";

const BuyCTA = ({ cta }:BuyCTAProps) => {
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
                                <div className="text-2xl font-semibold flex justify-center items-center">
                                    <span className="text-red-500 mr-2">৳1000</span>
                                    <span className="line-through text-gray-500">৳5000</span>
                                    <span className="bg-red-500 text-white text-sm ml-2 px-2 py-1 rounded">4000 ৳ ছাড়</span>
                                </div>
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