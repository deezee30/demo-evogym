import { useEffect, useState } from "react";

const useTopOfPage = (callback?: (isTopOfPage: boolean) => void) => {
  const [isTopOfPage, setTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isTopOfPage: boolean = window.scrollY === 0;
      
      setTopOfPage(isTopOfPage);
      callback?.(isTopOfPage);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isTopOfPage;
};

export default useTopOfPage;
