import userIcon from "@/shared/assets/user.svg";
import penWritingIcon from "@/shared/assets/pen-writing.svg";
import terminalIcon from "@/shared/assets/terminal.svg";
import messageIcon from "@/shared/assets/message.svg";
import { Icon } from "@/shared/ui/icon";

export const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 z-50 flex items-center justify-around px-4 backdrop-blur-md bg-body/80 border-t border-accent/10 pb-safe">
      <NavIcon src={userIcon} label="Who is Carlos Guillen?" />
      <NavIcon src={penWritingIcon} label="Projects" />
      <NavIcon src={terminalIcon} label="Tech skills of Carlos Guillen" />
      <NavIcon src={messageIcon} label="Contact" />
    </nav>
  );
};

const NavIcon = ({ src, label }) => (
  <button
    aria-label={label}
    className="flex flex-col items-center justify-center w-12 h-12 rounded-xl cursor-pointer transition-all active:scale-90 hover:bg-white/5"
  >
    <Icon
      src={src}
      alt={label}
      className="brightness-0 invert" // Forces SVG to pure white if they were black
    />
  </button>
);
