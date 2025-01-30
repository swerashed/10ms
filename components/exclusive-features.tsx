import Image from "next/image";
import SectionTitle from "./common/section-title";
import CheckIcon from "./icons/check-icon";
import FeatureIcon from "./icons/feature-icon";

const ExclusiveFeatures = () => {
  // 1. State hooks
  // 2. Functions/handlers
  // 3. useEffect or other hooks
  // 4. scope component or mini component

  //Feature items used on Featured card
  const FeatureListItem = () => {
    return (<div className="flex flex-row items-center gap-5">
      <CheckIcon />
      <p className="text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px]">
        IELTS Academic ও General Training নিয়ে আলোচনা
      </p>
    </div>)
  }

  //Feature Card holding features
  const FeatureCard = () => {
    return (
      <div className="flex flex-col items-start justify-between gap-5 py-5 md:flex-row ">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold flex justify-start items-center gap-6 leading-[30px] text-[#111827] md:text-[16px]">
           <FeatureIcon/> Reading ও Listening Mock Tests
          </h2>
          <FeatureListItem />
          <FeatureListItem />
          <FeatureListItem />
          <FeatureListItem />
        </div>
        <div
          className="max-w-[350px] duration-300 ease-in-out"

        >
          <Image
            alt="Reading ও Listening Mock Tests"
            loading="lazy"
            width={250}
            height={200}
            src="https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_book_sqr.png"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <SectionTitle>কোর্স এক্সক্লুসিভ ফিচার</SectionTitle>
      <div className="grid grid-cols-1 px-5 border divide-y divide-gray-200 rounded-md border-border">
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>

  );
};

export default ExclusiveFeatures;