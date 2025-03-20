export type CourseDetailsValue = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

type SEOData = {
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
};