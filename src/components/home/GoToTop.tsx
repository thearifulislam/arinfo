import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer"); // Select the footer element

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Show button when footer is in view
      },
      { threshold: 0.1 } // Trigger when 10% of the footer is visible
    );

    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
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