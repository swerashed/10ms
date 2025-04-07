export type CourseDetailsValue = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type SEOData = {
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

export interface MediaItems {
  name: string,
  resource_type: string,
  resource_value: string,
  thumbnail_url: string
}
export interface ProductData {
  slug: string,
  title: string,
  description: string
  media: MediaItems[]
}