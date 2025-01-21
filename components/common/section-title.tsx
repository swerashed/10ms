const SectionTitle = ({ children }: { children: string }) => {
  // 1. State hooks
  // 2. Functions/handlers
  // 3. useEffect or other hooks
  // 4. scope component or mini component
  
  return (
    <>
      <p className="section-title text-xl font-semibold md:text-2xl text-dark mb-4">{children}</p>
    </>
  );
};

export default SectionTitle;