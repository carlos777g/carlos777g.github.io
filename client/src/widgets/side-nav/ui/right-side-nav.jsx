// src/widgets/right-side-nav/ui.jsx
import React from "react";
import { Icon } from "@/shared/ui";

/**
 * RightSideNav Widget
 * Fixed right navigation for social links, visible on 'xl' screens.
 * Anchored to the bottom of the viewport.
 */
export const RightSideNav = () => {
  // Data structure mapped with unified registry keys instead of component references
  const SOCIAL_LINKS = [
    {
      id: "github",
      href: "https://github.com/carlos777g",
      iconName: "github",
      label: "GitHub Profile",
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/carlos-jael-guill%C3%A9n-gonz%C3%A1lez/",
      iconName: "linkedin",
      label: "LinkedIn Profile",
    },
    {
      id: "instagram",
      href: "https://www.instagram.com/soy_carlsjr/",
      iconName: "instagram",
      label: "Instagram Profile",
    },
    {
      id: "mail",
      href: "mailto:gcarlosjael@gmail.com",
      iconName: "gmail",
      label: "Send Email",
    },
  ];

  return (
    <aside className="fixed right-3 bottom-1 hidden backdrop-blur-lg rounded-full p-2 xl:flex flex-col items-center z-50">
      {/* Interactive Social Links */}
      <div className="flex flex-col items-center gap-4 mb-5">
        {SOCIAL_LINKS.map(({ id, href, iconName, label }) => {
          const isExternal = href.startsWith("http");

          return (
            <a
              key={id}
              href={href}
              aria-label={label}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="hover:text-accent hover:-translate-y-1 transition-all duration-200"
            >
              <Icon name={iconName} className="w-7 h-7" />
            </a>
          );
        })}
      </div>

      {/* Decorative Structural Base Anchor */}
      <div className="text-glass-white/30 pointer-events-none">
        <Icon name="pole" className="w-12 h-13 text-glass-white" />
      </div>
    </aside>
  );
};