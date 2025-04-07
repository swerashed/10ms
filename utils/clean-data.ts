export function cleanData(originalData: any) {
  // A Set provides faster lookups than an array's `includes` method
  const requiredFields = ["title", "description", "slug","media"]
  const requiredSet = new Set(requiredFields);
  
  return Object.fromEntries(
    Object.entries(originalData)
          .filter(([key]) => requiredSet.has(key))
  );
}
