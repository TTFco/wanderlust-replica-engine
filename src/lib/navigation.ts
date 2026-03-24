import type { NavigateFunction } from "react-router-dom";

export const extractSectionId = (href: string) => {
  if (href.startsWith("/#")) {
    return href.slice(2);
  }

  if (href.startsWith("#")) {
    return href.slice(1);
  }

  return null;
};

export const scrollToSectionById = (sectionId: string) => {
  const element = document.getElementById(sectionId);

  if (!element) {
    return false;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
};

type NavigateToSectionOptions = {
  href: string;
  currentPathname: string;
  navigate: NavigateFunction;
};

export const navigateToSection = ({
  href,
  currentPathname,
  navigate,
}: NavigateToSectionOptions) => {
  const sectionId = extractSectionId(href);

  if (!sectionId) {
    navigate(href);
    return;
  }

  const runScroll = () => {
    if (!scrollToSectionById(sectionId)) {
      window.location.hash = sectionId;
    }
  };

  if (currentPathname !== "/") {
    navigate(`/#${sectionId}`);
    window.setTimeout(runScroll, 120);
    return;
  }

  runScroll();
};
