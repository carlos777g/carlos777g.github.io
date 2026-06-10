import { useEffect, useRef, useState } from "react";

const ANIMATION_VARIANTS = {
  up: {
    hidden: "opacity-0 translate-y-10",
    visible: "opacity-100 translate-y-0 animate-reveal-up",
  },
  left: {
    hidden: "opacity-0 -translate-x-10",
    visible: "opacity-100 translate-x-0 animate-reveal-left",
  },
};

export const ScrollReveal = ({ 
  children, 
  className = "", 
  threshold = 0.1, 
  rootMargin = "-50px 0px",
  duration = 700,
  direction = "up",
  fullWidth = true,
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
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasRevealed, threshold, rootMargin]);

  const selectedVariant = ANIMATION_VARIANTS[direction] || ANIMATION_VARIANTS.up;

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        animationDuration: `${duration}ms`,
      }}
      className={`transition-all ${fullWidth ? "w-full" : "w-fit"} ${
        hasRevealed ? selectedVariant.visible : selectedVariant.hidden
      } ${className}`}
    >
      {children}
    </div>
  );
};