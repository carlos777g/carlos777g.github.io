import { useMemo } from "react";
import { PixelArtSparklesIcon } from "@/shared/ui/icons/pixel-art-sparkles.jsx";
import { PixelArtHexagonIcon } from "@/shared/ui/icons/pixel-art-hexagon.jsx";

/**
 * RandomIconBackground
 * Generates a collision-free randomized background pattern.
 */
export const RandomIconBackground = ({ count = 7 }) => {

  const backgroundIcons = useMemo(() => {
    const icons = [];
    const MIN_DISTANCE = 18; 
    const MAX_RETRIES = 50; 

    for (let i = 0; i < count; i++) {
      let top, left;
      let collision = true;
      let attempts = 0;

      while (collision && attempts < MAX_RETRIES) {
        top = Math.floor(Math.random() * 90) + 5; 
        left = Math.floor(Math.random() * 90) + 5; 
        collision = false;

        for (const existingIcon of icons) {
          const dx = left - existingIcon.left;
          const dy = top - existingIcon.top;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MIN_DISTANCE) {
            collision = true; 
            break;
          }
        }
        attempts++;
      }

      const isHexagon = Math.random() > 0.4;
      const size = Math.floor(Math.random() * 78) + 22; // 22px to 100px
      const isAccent = Math.random() > 0.35;
      const animateClass = Math.random() > 0.5 ? "animate-breathe" : "animate-point";

      icons.push({ id: i, isHexagon, size, top, left, isAccent, animateClass });
    }
    
    return icons;
  }, [count]); 

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 block">
      {backgroundIcons.map((icon) => {
        const IconComponent = icon.isHexagon ? PixelArtHexagonIcon : PixelArtSparklesIcon;
        const colorClass = icon.isAccent ? "text-accent" : "text-glass-white";

        return (
          <div
            key={icon.id}
            className={`absolute opacity-10 ${colorClass} ${icon.animateClass}`}
            style={{ 
              top: `${icon.top}%`, 
              left: `${icon.left}%`, 
              width: `${icon.size}px`, 
              height: `${icon.size}px`,
              transform: 'translate(-50%, -50%)' 
            }}
          >
            <IconComponent className="w-full h-full" />
          </div>
        );
      })}
    </div>
  );
};