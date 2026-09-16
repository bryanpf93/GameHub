import { useEffect } from "react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

export const useScrollToTop = (): void => {
  useEffect(() => {
    scrollToTop();
  }, []);
};
