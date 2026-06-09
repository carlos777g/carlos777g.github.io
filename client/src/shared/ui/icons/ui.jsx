import React from 'react';
import { ICON_REGISTRY } from './icon-registry.jsx';

export const Icon = ({ name, className = "" }) => {
  const selectedIcon = ICON_REGISTRY[name];

  if (!selectedIcon) {
    console.warn(`Icon "${name}" not found in ICON_REGISTRY.`);
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={selectedIcon.viewBox}
      className={`w-6 h-6 fill-none ${className}`} // Sane defaults
    >
      {selectedIcon.content}
    </svg>
  );
};