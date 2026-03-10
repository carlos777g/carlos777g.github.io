import { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal Wrapper
 * Encapsulates IntersectionObserver logic to trigger a reveal animation once.
 * Uses a configuration dictionary for highly scalable animation variants.
 */

// Dictionary Pattern: Maps the 'direction' prop to exact Tailwind classes
const ANIMATION_VARIANTS = {
  up: {
    hidden: "opacity-0 translate-y-10",
    visible: "opacity-100 translate-y-0 animate-reveal-up",
  },
  left: {
    hidden: "opacity-0 -translate-x-10", // -translate-x-10 pushes it left
    visible: "opacity-100 translate-x-0 animate-reveal-left",
  },
};

export const ScrollReveal = ({ 
  children, 
  className = "", 
  threshold = 0.1, 
  rootMargin = "-50px 0px",
  duration = 700,         // Default duration in milliseconds
  direction = "up"        // Default direction ('up' | 'left')
}) => {
  const [hasRevealed, setHasRevealed] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const currentRef = domRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed) {
          setHasRevealed(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold, rootMargin }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasRevealed, threshold, rootMargin]);

  // Default to 'up' if an invalid direction is passed
  const selectedVariant = ANIMATION_VARIANTS[direction] || ANIMATION_VARIANTS.up;

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        animationDuration: `${duration}ms`,
      }}
      className={`transition-all w-full ${
        hasRevealed ? selectedVariant.visible : selectedVariant.hidden
      } ${className}`}
    >
      {children}
    </div>
  );
};