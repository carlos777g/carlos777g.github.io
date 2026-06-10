// src/shared/ui/header-link/ui.jsx
import { Link } from "react-router-dom";
import { Icon } from "@/shared/ui";

/**
 * HeaderLink Component
 * Retains exact original pixel dimensions, spacing, animations, and hover transitions.
 * Dynamically swaps between React Router <Link> and native <a> tags for routing performance.
 */
export const HeaderLink = ({ href, icon1Name, icon2Name }) => {
  // Check if the link targets an external destination
  const isExternal = href.startsWith("http") || href.startsWith("mailto");

  // Preserved your exact original Tailwind class matrix
  const sharedClasses = "group flex items-center text-muted-white gap-2 md:gap-4 cursor-pointer p-2 hover:text-accent transition-colors duration-300";

  // Isolated content wrapper to ensure identical DOM layout across variants
  const renderContent = () => (
    <>
      {icon1Name && (
        <Icon 
          name={icon1Name} 
          className="w-8 h-8 md:w-12 md:h-12 animate-breathe transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" 
        />
      )}

      {icon2Name && (
        <Icon 
          name={icon2Name} 
          className="w-6 h-6 md:w-10 md:h-10 animate-point-right transition-transform duration-300" 
        />
      )}
    </>
  );

  // Scenario A: External routing layout
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClasses}
      >
        {renderContent()}
      </a>
    );
  }

  // Scenario B: Internal SPA client-side virtual transition
  return (
    <Link to={href} className={sharedClasses}>
      {renderContent()}
    </Link>
  );
};