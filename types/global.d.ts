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

//Common Section Items 
export interface CommonSection {
  bg_color: string;
  description: string;
  name: string;
  order_idx: number;
  type: string;
}
// Course Instructor Information
export interface Instructor {
  name: string;
  image: string;
  description: string;
  short_description: string;
  slug: string;
  has_instructor_page: boolean;
}

export interface InstructorSection extends CommonSection {
  values: Instructor[];
}


// Laid Out Item for Grid Features (Icon + Title + Subtitle)
export interface LaidOutItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface LaidOutSection extends CommonSection {
  values: LaidOutItem[];
}

// Learning Outcome Item ("You will learn..." list)
export interface WillLearnItem {
  id: string;
  text: string;
}

export interface WillLearnSection extends CommonSection {
  values: WillLearnItem[];
}

// Exclusive Feature Section (with title, file, and checklist items)
export interface ExclusiveFeature {
  id: string;
  title: string;
  file_url: string;
  checklist: string[];
}

export interface ExclusiveFeatureSection extends CommonSection {
  values: ExclusiveFeature[];
}

// Detailed Course Section Item (Title + Description)
export interface CourseDetail {
  id: string;
  title: string;
  description: string;
}

export interface CourseDetailSection extends CommonSection {
  values: CourseDetail[];
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
    trailer?: Media;
    gallery: Media[];
  };
  cta_text: CTAText;
  checklist: ChecklistItem[];
  sections: {
    instructors: InstructorSection;
    laidOut: LaidOutSection;
    willLearn: WillLearnSection;
    exclusiveFeatures: ExclusiveFeatureSection;
    courseDetails: CourseDetailSection;
  };
}


