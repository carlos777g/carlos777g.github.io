import React from "react";
import { ScrollReveal, Icon } from "@/shared/ui";

/**
 * EducationSection Component
 * Reusable layout for academic credentials and degrees.
 */
export const EducationSection = ({ title, school, items, iconName }) => (
  <div className="text-left max-w-full">
    <ScrollReveal direction="left" duration="500">
      <div className="flex items-center gap-10">
        <h3 className="text-accent font-bold text-lg tracking-tighter">
          {title}
        </h3>
        {iconName && (
          <Icon 
            name={iconName} 
            className="w-6 h-6 text-accent shrink-0 hidden sm:block" 
          />
        )}
      </div>
    </ScrollReveal>
    
    <ScrollReveal direction="left" duration="500">
      <h4 className="mb-4 text-sm font-bold">{school}</h4>
    </ScrollReveal>
    
    <ul className="space-y-1">
      {items.map((item, index) => (
        <ScrollReveal
          key={`${title}-item-${index}`}
          direction="left"
          duration="500"
        >
          <li className="flex items-start gap-3 text-glass-white/90">
            <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <p className="text-xs leading-relaxed">{item}</p>
          </li>
        </ScrollReveal>
      ))}
    </ul>
  </div>
);