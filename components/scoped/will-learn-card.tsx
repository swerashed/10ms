import CheckIcon from "../icons/check-icon"
import { WillLearnCardProps } from "@/types/page-component-props"

const WillLearnCard = ({item}:WillLearnCardProps) => {
    return (<li className="flex items-start gap-2 mb-2">
        <CheckIcon />
        <p className="flex-1">
          {item.text}
        </p>
    </li>)
}

export default WillLearnCard