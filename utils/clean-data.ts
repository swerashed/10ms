// utils/clean-data.ts

import { CleanedProductData, Media } from "@/types/global";


export function cleanData(originalData: any): CleanedProductData | null {
  const data = originalData?.data;

  // Basic validation to ensure essential data exists
  if (!data || !data.slug || !data.title || !Array.isArray(data.sections)) {
    return null;
  }

  // Process sections into a structured object for easier access
  const sections = data.sections.reduce((acc: any, section: any) => {
    switch (section.type) {
      case 'instructors':
        acc.instructors = section || {};
        break;
      case 'features': //  (How the course is laid out)
        acc.laidOut = section || {};
        break;
      case 'pointers': //What you will learn)
        acc.willLearn = section || {};
        break;
      case 'feature_explanations': //(Exclusive Features)
        acc.exclusiveFeatures = section || {};
        break;
      case 'about': //(About the course)
        acc.courseDetails = section || {};
        break;
      default:
        break;
    }
    return acc;
  }, {
    instructors: {},
    laidOut: {},
    willLearn: {},
    exclusiveFeatures: {},
    courseDetails: {},
  });

  const mediaItems: Media[] = data.media || [];
  const trailer = mediaItems.find(
    (item) => item.resource_type === 'video' && item.name === 'preview_gallery'
  );

  return {
    slug: data.slug,
    title: data.title,
    description: data.description,
    cta_text: data.cta_text,
    media: {
      trailer: trailer,
      gallery: mediaItems,
    },
    checklist: data.checklist || [],
    sections,
  };
}