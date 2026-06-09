import { Icon } from "@/shared/ui/Icon";

export const HeaderLink = ({ href, icon1Name, icon2Name }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center text-muted-white gap-2 md:gap-4 cursor-pointer p-2 hover:text-accent transition-colors duration-300"
    >
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
    </a>
  );
};