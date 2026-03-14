import { InstagramIcon } from "@/shared/ui/icons/instagram";
import { LinkedinIcon } from "@/shared/ui/icons/linkedin";
import { GithubIcon } from "@/shared/ui/icons/github";
import { GmailIcon } from "@/shared/ui/icons/gmail";
import { PoleIcon } from "@/shared/ui/icons/pole";

/**
 * RightSideNav Widget
 * Fixed right navigation for social links, visible on 'xl' screens.
 * Anchored to the bottom of the viewport.
 */
export const RightSideNav = () => {
  const SOCIAL_LINKS = [
    {
      id: "github",
      href: "https://github.com/carlos777g",
      Icon: GithubIcon,
      label: "GitHub Profile",
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/carlos-jael-guill%C3%A9n-gonz%C3%A1lez/",
      Icon: LinkedinIcon,
      label: "LinkedIn Profile",
    },
    {
      id: "instagram",
      href: "https://www.instagram.com/soy_carlsjr/",
      Icon: InstagramIcon,
      label: "Instagram Profile",
    },
    {
      id: "mail",
      href: "mailto:gcarlosjael@gmail.com",
      Icon: GmailIcon,
      label: "Send Email",
    },
  ];

  return (
    <aside className="fixed right-8 bottom-1 hidden backdrop-blur-lg rounded-full p-2 xl:flex flex-col items-center z-50">
      {/* Interactive Social Links */}
      <div className="flex flex-col items-center gap-4 mb-5">
        {SOCIAL_LINKS.map(({ id, href, Icon, label }) => {
          // Determine if the link is external to apply secure attributes
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
              <Icon className="w-7" />
            </a>
          );
        })}
      </div>

      <div className="text-glass-white/30 pointer-events-none">
        <PoleIcon className="w-12 h-13 text-glass-white" />
      </div>
    </aside>
  );
};
