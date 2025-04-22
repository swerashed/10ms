import { Instructor, InstructorSection, LaidOutSection } from "./global";

/* Page and Components Props */
export type CheckListsProps = {
    checklists: ChecklistItem[];
    translation: TranslatedData;
};

export type LangParamProps = {
    params: {
        lang: 'en' | 'bn'
    }
}
export type LayoutParams = Readonly<{
    children: React.ReactNode;
    params: {
        lang: 'en' | 'bn';
    };
}>;


export interface InstructorsProps {
  instructors: InstructorSection;
};
export interface LaidOutProps {
  laidOutData: LaidOutSection;
};