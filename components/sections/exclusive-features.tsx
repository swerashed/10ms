import { ExclusiveFeature } from "@/types/global";
import SectionTitle from "../common/section-title";
import FeatureCard from "../scoped/feature-card";
import { ExclusiveFeatureSectionProps } from "@/types/page-component-props";

const ExclusiveFeatures = ({exclusiveFeatures}:ExclusiveFeatureSectionProps) => {
  // 1. State hooks
  // 2. Functions/handlers
  // 3. useEffect or other hooks
  // 4. scope component or mini component

  return (
    <div>
      <SectionTitle>{exclusiveFeatures.name}</SectionTitle>
      <div className="grid grid-cols-1 px-5 border divide-y divide-gray-200 rounded-md border-border">
        {
          exclusiveFeatures.values.map((item: ExclusiveFeature)=>(
            <FeatureCard key={item.id} item={item}/>
          ))
        }
      </div>
    </div>

  );
};

export default ExclusiveFeatures;