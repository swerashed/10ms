import { LaidOutProps } from "@/types/page-component-props";
import SectionTitle from "../common/section-title";
import LaidOutCard from "../scoped/laid-out-card";

const LaidOut = ({ laidOutData }: LaidOutProps) => {
    // 1. State hooks
    // 2. Functions/handlers
    // 3. useEffect or other hooks
    // 4. scope component or mini component


    return (
        <>
            <SectionTitle>{laidOutData.name}</SectionTitle>

            <div className="grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
                {
                    laidOutData.values.map(item => (
                        <LaidOutCard key={item.id} item={item} />
                    ))
                }
            </div>
        </>
    );
};

export default LaidOut;