import { WillLearnItem } from "@/types/global"
import CheckIcon from "../icons/check-icon"

const WillLearnCard = ({item}:{item: WillLearnItem}) => {
    return (<li className="flex items-start gap-2 mb-2">
        <CheckIcon />
        <p className="flex-1">
          {item.text}
        </p>
    </li>)
}

export default WillLearnCard