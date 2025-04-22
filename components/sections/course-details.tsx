import { CourseDetailSection } from "@/types/global";
import Accordion from "../common/accordion";
import SectionTitle from "../common/section-title";

const CourseDetails = ({courseDetails}:{courseDetails:CourseDetailSection}) => {
    // 1. State hooks
    // 2. Functions/handlers
    // 3. useEffect or other hooks
    // 4. scope component or mini component

    return (
        <div>
            <SectionTitle>{courseDetails.name}</SectionTitle>
            <div className="border border-border p-5 rounded-md">
                <Accordion items={courseDetails.values} />
            </div>
        </div>
    );
};

export default CourseDetails;