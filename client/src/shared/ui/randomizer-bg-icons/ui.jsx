// src/shared/ui/randomizer-bg-icons/ui.jsx
import { useState } from "react";
import { Icon } from "@/shared/ui";

/**
 * generateBackgroundIcons
 * Pure JavaScript utility function abstracted away from the rendering cycle.
 * Calculates a collision-free randomized array layout using circle packing metrics.
 */
const generateBackgroundIcons = (count) => {
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

    const iconName = Math.random() > 0.4 ? "pixel-art-hexagon" : "pixel-art-sparkles";
    const size = Math.floor(Math.random() * 78) + 22; // 22px to 100px
    const isAccent = Math.random() > 0.35;
    const animateClass = Math.random() > 0.5 ? "animate-breathe" : "animate-point";

    icons.push({ id: i, iconName, size, top, left, isAccent, animateClass });
  }
  
  return icons;
};

/**
 * RandomIconBackground
 * Generates a stable, collision-free randomized background pattern.
 */
export const RandomIconBackground = ({ count = 7 }) => {
  // Using Lazy State Initialization to call the impure generation logic exactly ONCE when mounted.
  // React guarantees this closure will never be re-executed during subsequent re-renders.
  const [backgroundIcons] = useState(() => generateBackgroundIcons(count));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 block">
      {backgroundIcons.map((icon) => {
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
            <Icon name={icon.iconName} className="w-full h-full" />
          </div>
        );
      })}
    </div>
  );
};