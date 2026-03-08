import { useEffect, useRef, useState } from "react";
/**
 * AnimatedUnderline Component
 * A reusable architectural detail. Triggers a dual-line expansion when visible.
 * AnimatedUnderline Component
 * @param {string} width -(ej. 'w-12', 'w-[50px]', 'w-full')
 */
export const AnimatedUnderline = ({ width = "w-full" }) => {
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
      { threshold: 0.1 },
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={domRef} className={`flex flex-col gap-0.5 mt-1 ${width} mx-auto`}>
      <span
        className={`h-0.5 bg-accent block origin-left rotate-[0.8deg] transition-transform duration-700 ${
          isVisible ? "scale-x-100" : "scale-x-0"
        }`}
      />
      <span
        className={`h-px bg-accent block origin-right delay-200 -rotate-1 transition-transform duration-700 ${
          isVisible ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  );
};
