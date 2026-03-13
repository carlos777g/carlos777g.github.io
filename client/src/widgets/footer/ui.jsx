// src/widgets/footer/ui.jsx

// 1. Import your newly created React components
// Ensure that inside these files, you are exporting the components properly
// e.g., export const GithubIcon = ({ className }) => (...)
import { GithubIcon } from "@/shared/ui/icons/github";
import { LinkedinIcon } from "@/shared/ui/icons/linkedin";
import { InstagramIcon } from "@/shared/ui/icons/instagram";
import { GmailIcon } from "@/shared/ui/icons/gmail";

// 2. Map the component references, not strings
const SOCIAL_LINKS = [
  {
    name: "GitHub",
    Component: GithubIcon,
    url: "https://github.com/carlos777g",
  },
  {
    name: "LinkedIn",
    Component: LinkedinIcon,
    url: "https://www.linkedin.com/in/carlos-jael-guill%C3%A9n-gonz%C3%A1lez/",
  },
  {
    name: "Instagram",
    Component: InstagramIcon,
    url: "https://www.instagram.com/soy_carlsjr/",
  },
  { name: "Email", Component: GmailIcon, url: "mailto:gcarlosjael@gmail.com" },
];

export const Footer = () => {
  // Smooth scroll logic interacting directly with the Window API
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full mt-10 pt-10 pb-5 px-6 border-t border-glass-white/10 bg-body relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative">
        <div className="flex items-center gap-6 mb-6">
          {SOCIAL_LINKS.map((link) => {
            const IconComponent = link.Component;

            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="group p-2"
              >
                <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-muted-white transition-all duration-300 group-hover:text-accent group-hover:-translate-y-1 group-hover:scale-110" />
              </a>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-muted-white text-xs md:text-sm font-extralight tracking-wide">
            Engineered by{" "}
            <span className="font-bold text-accent">Carlos Guillén</span>.
          </p>
          <p className="text-glass-white/40 text-[10px] mt-2 font-mono uppercase tracking-widest">
            Powered by caffeine, Linux, and late-night debugging. &copy;{" "}
            {new Date().getFullYear()}
          </p>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group cursor-pointer mt-8 lg:absolute lg:right-30 xl:right-50 lg:top-1/2 lg:-translate-y-1/2 flex items-center gap-2 text-muted-white transition-colors duration-200 hover:text-accent"
        >
          <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">
            Top
          </span>
          <div className="p-3 bg-glass-white/5 border border-glass-white/10 rounded-full transition-all duration-300 group-hover:bg-accent/10 group-hover:border-accent/30">
            {/* Inline structural arrow SVG pointing UP */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </div>
        </button>
      </div>
    </footer>
  );
};
