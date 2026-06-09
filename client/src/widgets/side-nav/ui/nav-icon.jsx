// src/widgets/side-nav/ui/nav-icon.jsx
import React from "react";
import { Icon } from "@/shared/ui";

/**
 * NavIcon Component
 * Represents a single navigation node with an adaptive vector glyph and a tooltip.
 */
export const NavIcon = ({ href, name, label }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-glass-white/20 bg-body/50 backdrop-blur-sm hover:border-accent transition-all duration-300"
    >
      {/* Invocamos el componente centralizado. 
        Mantenemos tu lógica de cascada (group-hover) usando 'currentColor' de forma nativa.
      */}
      <Icon 
        name={name} 
        className="w-5 h-5 text-glass-white group-hover:text-accent transition-colors duration-300" 
      />

      {/* Tooltip */}
      <span className="absolute left-16 px-3 py-1 rounded-md bg-body border border-accent/20 text-accent text-xs font-bold whitespace-nowrap opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        {label}
      </span>
    </a>
  );
};