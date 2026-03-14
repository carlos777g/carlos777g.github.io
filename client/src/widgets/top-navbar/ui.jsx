import { useScrollDirection } from "@/shared/lib/hooks/use-scroll-direction";
import { ThemeButton } from "@/features/theme-switch";

export const TopNavbar = () => {
  const scrollDir = useScrollDirection();

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full h-16 z-50 transition-transform duration-300 flex items-center justify-between px-6 backdrop-blur-md bg-body/70 border-b border-accent/10 
  ${scrollDir === "down" ? "-translate-y-full" : "translate-y-0"}`}
    >
      <a href="/" className="text-2xl tracking-tighter font-itim group">
        carworks
        <span className="text-accent group-hover:brightness-110 transition-all">
          .dev
        </span>
      </a>

      <ThemeButton />
    </nav>
  );
};
