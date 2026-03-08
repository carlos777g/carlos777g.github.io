import { useEffect, useRef, useState } from "react";

/**
 * AnimatedUnderline Component
 * A reusable architectural detail. Triggers a dual-line expansion when visible.
 */
export const AnimatedUnderline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.1 } // Lower threshold so it triggers easily when attached to bottom of elements
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={domRef} className="flex flex-col gap-0.5 mt-2 w-full">
      <span 
        className={`h-0.5 bg-accent block origin-left rotate-[0.8deg] ${
          isVisible ? "animate-expand" : "scale-x-0"
        }`} 
      />
      <span 
        className={`h-px bg-accent block origin-right delay-200 -rotate-1 ${
          isVisible ? "animate-expand" : "scale-x-0"
        }`} 
      />
    </div>
  );
};