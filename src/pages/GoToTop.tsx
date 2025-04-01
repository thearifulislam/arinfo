import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[rgb(56,132,255)] text-white p-3 rounded-full shadow-lg hover:bg-[rgb(40,100,200)] transition z-50"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    )
  );
};

export default GoToTop;