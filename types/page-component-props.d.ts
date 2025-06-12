import {
    Instructor,
    InstructorSection,
    LaidOutSection,
    WillLearnItem
} from "./global";

/* Page and Components Props */
export type CheckListsProps = {
    checklists: ChecklistItem[];
    translation: TranslatedData;
};

export type LangParamProps = {
    params: Promise<{ lang: 'en' | 'bn' }>
};

export type LayoutParams = Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: 'en' | 'bn' }>;
}>;

/* Section Component Props */
export interface InstructorsProps {
    instructors: InstructorSection;
}

export interface LaidOutProps {
    laidOutData: LaidOutSection;
}

export type WillLearnSectionProps = {
    willLearnData: WillLearnSection;
};

export type CourseDetailsSectionProps = {
    courseDetails: CourseDetailSection;
};

export type ExclusiveFeatureSectionProps = {
    exclusiveFeatures: ExclusiveFeatureSection;
};

/* UI Component Props */
export type NavbarProps = {
    translation: TranslatedData;
};

export type AccordionProps = {
    items: CourseDetail[];
};

export type FeatureCardProps = {
    item: ExclusiveFeature;
};

export type LaidOutCardProps = {
    item: LaidOutItem;
};

export type WillLearnCardProps = {
    item: WillLearnItem;
};

export type BuyCTAProps = {
    cta: CTAText;
};

export type ProductTrailerProps = {
    data: Media[];
};

export type TitleAndDescriptionProps = {
    data: CleanedProductData;
    translation: TranslatedData;
};

export type FooterProps = NavbarProps & {};
