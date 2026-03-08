import userIcon from "@/shared/assets/user.svg";
import penWritingIcon from "@/shared/assets/pen-writing.svg";
import terminalIcon from "@/shared/assets/terminal.svg";
import messageIcon from "@/shared/assets/message.svg";
import { Icon } from "@/shared/ui/icon";

export const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 z-50 flex items-center justify-around px-4 backdrop-blur-md bg-body/80 border-t border-accent/10 pb-safe md:hidden">
      {/* Rigor: Añadí 'md:hidden' porque esta barra solo debe existir en móviles. 
         En desktop ya tienes tu navegación principal.
      */}
      <NavIcon href="#who-am-i" src={userIcon} label="Who is Carlos?" />
      <NavIcon href="#projects" src={penWritingIcon} label="Projects" />
      <NavIcon href="#tech-stack" src={terminalIcon} label="Tech Skills" />
      <NavIcon href="#contact" src={messageIcon} label="Contact" />
    </nav>
  );
};

const NavIcon = ({ href, src, label }) => (
  <a
    href={href}
    aria-label={label}
    className="flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all active:scale-90 hover:bg-white/5"
  >
    <Icon
      src={src}
      alt={label}
      // Usamos 'text-accent' si quieres que brillen o mantenemos tu invert
      className="brightness-0 invert w-6 h-6" 
    />
  </a>
);