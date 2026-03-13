import { useState, useEffect } from "react";
import { MouseIcon } from "@/shared/ui/icons/mouse";

/**
 * ScrollIndicator Component
 * Displays a visual cue to scroll. Automatically dismisses itself 
 * gracefully upon actual user scroll or a fallback timeout.
 */
export const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const fallbackTimer = setTimeout(() => {
      setIsVisible(false);
      window.removeEventListener("scroll", handleScroll);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div 
      className={`flex flex-col items-center gap-2 mt-4 transition-all duration-800 ease-in-out ${
        isVisible 
          ? "opacity-50 max-h-24 mt-4 translate-y-0" 
          : "opacity-0 max-h-0 mt-0 translate-y-4 pointer-events-none"
      }`}
    >
      <MouseIcon className="w-6 h-6  animate-bounce" />
      <span 
        className="text-[10px] uppercase tracking-[0.3em]" 
        style={{ writingMode: "vertical-rl" }}
      >
        Scroll
      </span>
    </div>
  );
};