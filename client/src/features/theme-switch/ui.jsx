import { applyRandomTheme } from '@/shared/lib/theme/random-theme';

export const ThemeButton = () => {
  const handleThemeChange = () => {
    applyRandomTheme();
  };

  return (
    <button
      onClick={handleThemeChange}
      className="p-2 cursor-pointer rounded-full transition-all duration-300 active:scale-90 bg-accent/10 hover:bg-accent/20 group"
      aria-label="Toggle Color Palette"
    >
      
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-accent group-hover:rotate-12 transition-transform"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 3V4M12 20V21M4 12H3M21 12H20M18.3639 5.63604L17.6569 6.34315M6.34315 17.6569L5.63604 18.3639M18.3639 18.3639L17.6569 17.6569M6.34315 6.34315L5.63604 5.63604M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};