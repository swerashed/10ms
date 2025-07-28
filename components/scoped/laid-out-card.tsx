import { LaidOutItem } from "@/types/global"
import Image from "next/image"

const LaidOutCard = ({ item }: { item: LaidOutItem }) => {
    return (
        <div className="flex flex-row items-start gap-3 m-1 ">
            <div
                className="mb-4 mx-auto transition-opacity duration-300 ease-in-out"
            >
                <Image
                    alt={item.title}
                    loading="lazy"
                    width={36}
                    height={36}
                    src={item.icon}
                />
            </div>
            <div className="flex flex-col flex-1 gap-2">
                <h2 className="text-[18px] font-[500px] leading-[26px] text-white ">
                    {item.title}
                </h2>
                <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                    {
                        item.subtitle
                    }
                </h2>
            </div>
        </div>
    )
}

export default LaidOutCard