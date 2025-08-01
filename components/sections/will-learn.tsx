import { WillLearnItem } from "@/types/global";
import SectionTitle from "../common/section-title";
import WillLearnCard from "../scoped/will-learn-card";
import { WillLearnSectionProps } from "@/types/page-component-props";

const WillLearn = ({ willLearnData }: WillLearnSectionProps) => {
    // 1. State hooks
    // 2. Functions/handlers
    // 3. useEffect or other hooks
    // 4. scope component or mini component
    return (
        <div >
            <SectionTitle>{willLearnData.name}</SectionTitle>
            <div className="rounded-md md:border md:border-border">
                <ul className="grid pt-2 md:p-6 grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
                    {
                        willLearnData.values.map((item: WillLearnItem) => (
                            <WillLearnCard key={item.id} item={item} />
                        ))
                    }
                </ul>
            </div>
        </div>

    );
};

export default WillLearn;