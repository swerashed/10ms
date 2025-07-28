import Image from "next/image"
import CheckIcon from "../icons/check-icon"
import { FeatureCardProps } from "@/types/page-component-props"

const FeatureCard = ({ item }: FeatureCardProps) => {
    // 1. State hooks
    // 2. Functions/handlers
    // 3. useEffect or other hooks
    // 4. scope component or mini component
    const FeatureListItem = ({ feature }: { feature: string }) => {
        return (<div className="flex flex-row items-center gap-5">
            <CheckIcon />
            <p className="text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px]">
                {feature}
            </p>
        </div>)
    }

    return (
        <div className="flex flex-col items-start justify-between gap-5 py-5 md:flex-row ">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold flex justify-start items-center gap-6 leading-[30px] text-[#111827] md:text-[16px]">
                    {item.title}
                </h2>
                {
                    item.checklist.map((feature:string, index: number) => (
                        <FeatureListItem key={index} feature={feature} />
                    ))
                }
            </div>
            <div
                className="max-w-[350px] duration-300 ease-in-out"

            >
                <Image
                    alt={item.title}
                    loading="lazy"
                    width={250}
                    height={200}
                    src={item.file_url}
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    )
}

export default FeatureCard