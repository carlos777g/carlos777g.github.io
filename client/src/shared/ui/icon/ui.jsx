/**
 * Generic Icon Component
 * @param {string} src - Path to the SVG file
 * @param {string} alt - Alternative text for accessibility
 * @param {string} className - Additional Tailwind classes
 */
export const Icon = ({ src, alt, className = "" }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`w-6 h-6 object-contain pointer-events-none ${className}`} 
    />
  );
};