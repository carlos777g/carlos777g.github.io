// src/widgets/bottom-navbar/ui.jsx (o la capa donde esté tu Navbar)
import { Icon } from "@/shared/ui";

export const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 z-50 flex items-center justify-around px-4 backdrop-blur-md bg-body/80 border-t border-accent/10 pb-safe md:hidden">
      {/* 
        Rigor: Pasamos el 'name' que registraste en tu diccionario.
        Aprovechamos para cambiar el link de proyectos a tu nueva feature branch de blog cuando estés listo.
      */}
      <NavIcon href="#who-am-i" name="user" label="Who is Carlos?" />
      <NavIcon href="#projects" name="pen-writing" label="Projects" /> 
      <NavIcon href="#blog" name="blog" label="Tech Skills" />
      <NavIcon href="#tech-stack" name="message" label="Contact" />
    </nav>
  );
};

const NavIcon = ({ href, name, label }) => (
  <a
    href={href}
    aria-label={label}
    className="flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all active:scale-90 text-neutral-400 hover:text-accent hover:bg-white/5"
  >
    <Icon 
      name={name} 
      className="w-7 h-9 transition-colors duration-200" 
    />
  </a>
);