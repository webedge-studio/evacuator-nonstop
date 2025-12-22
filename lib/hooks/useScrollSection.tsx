export const useScrollSection = () => {
  const goToSection = (sectionId: string) => {
    document.getElementById(sectionId)!.scrollIntoView({ behavior: "smooth" });
  };

  return { goToSection };
};
