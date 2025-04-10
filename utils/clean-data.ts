export function cleanData(originalData: any) {
  const requiredFields = ["title", "description", "slug","media", "sections"]
  const requiredSet = new Set(requiredFields);
  
  return Object.fromEntries(
    Object.entries(originalData)
          .filter(([key]) => requiredSet.has(key))
  );
}
