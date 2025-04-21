import { ChecklistItem } from '@/types/global'
import Image from 'next/image'

const ChecklistListItem = ({item}:{item:ChecklistItem}) => {
    return (
        <div className="flex items-center mb-3 leading-5">
            <div
                className="inline-block h-[20px] w-[20px] transition-opacity duration-300 ease-in-out"
            >
                <Image
                    alt="icon"
                    loading="lazy"
                    width={20}
                    height={20}
                    src={item.icon}
                />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
               {item.text}
            </h4>
        </div>
    )
}

export default ChecklistListItem