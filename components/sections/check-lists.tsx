import ChecklistListItem from "../scoped/checklist-list-Item";
import { CheckListsProps } from "@/types/page-component-props";

const CheckLists = ({ checklists, translation }: CheckListsProps) => {
    // 1. State hooks
    // 2. Functions/handlers
    // 3. useEffect or other hooks
    // 4. scope component or mini component

    return (
        <div className="py-2 md:p-4">
            <p className="mb-4 text-xl font-semibold">{translation.checklist_label}</p>
            {
                checklists.map(checklist => (
                    <ChecklistListItem key={checklist.id} item={checklist} />
                ))
            }
        </div>
    );
};

export default CheckLists;