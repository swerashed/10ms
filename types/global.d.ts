 // SEO Metadata Type
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  defaultMeta: {
    content: string;
    type: string;
    value: string;
  }[];
  schema: {
    meta_name: string;
    meta_value: string;
    type: string;
  }[];
}

 // Media Type (e.g., images, videos, etc.)
export interface Media {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}

 // Translation Labels for Multilingual Support
export interface TranslatedData {
  banner_stat: string;
  cta_label: string;
  copyright: string;
  checklist_label: string;
}

 // Checklist Item List
export interface ChecklistItem {
  id: string;
  text: string;
  icon: string;
}

 // Course Instructor Information
export interface Instructor {
  name: string;
  image: string;
  description: string;
  short_description: string;
}

 // Laid Out Item for Grid Features (Icon + Title + Subtitle)
export interface LaidOutItem {
  title: string;
  subtitle: string;
  icon: string;
}

 // Learning Outcome Item ("You will learn..." list)
export interface WillLearnItem {
  text: string;
}

 // Exclusive Feature Section (with title, file, and checklist items)
export interface ExclusiveFeature {
  title: string;
  file_url: string;
  checklist: string[]; // list of checklist item strings
}

 // Detailed Course Section Item (Title + Description)
export interface CourseDetail {
  title: string;
  description: string;
}

 // CTA Text Key-Value (For buttons or Call-to-Actions)
export interface CTAText {
  name: string;
  value: string;
}

 // Cleaned Product Data Structure (Main Product Schema)
export interface CleanedProductData {
  slug: string;
  title: string;
  description: string;
  media: {
    trailer?: Media; // Optional trailer media
    gallery: Media[]; // Gallery media list
  };
  cta_text: CTAText; // Call-to-Action Text
  checklist: ChecklistItem[]; // Main checklist items
  sections: {
    instructors: Instructor[];
    laidOut: LaidOutItem[];
    willLearn: WillLearnItem[];
    exclusiveFeatures: ExclusiveFeature[];
    courseDetails: CourseDetail[];
  };
}


