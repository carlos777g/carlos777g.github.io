import { Icon } from "@/shared/ui/icon";
import curvedArrowIcon from "@/shared/assets/curved-arrow.svg";

/**
 * HeroInfo Component
 * Handles the textual identity, decorative arrow, and contact action.
 */
export const HeroInfo = () => {
  return (
    <>
      <div className="absolute -top-13 -right-13 w-max rotate-11 z-20">
        <span className="text-accent font-black text-3xl animate-breathe inline-block">
          Hello world!
        </span>
      </div>

      <div className="absolute -left-35 top-20 -translate-y-1/2 flex flex-col items-start z-20">
        <span className="text-accent font-bold text-md">I am</span>
        
        <h1 className="text-3xl font-black flex flex-col leading-tight">
          <span>Carlos</span>
          <span className="relative left-5">Guillén</span>
        </h1>

        <Icon
          src={curvedArrowIcon}
          alt="Decorative arrow pointing to name"
          className="brightness-0 invert relative -top-21 left-32 w-17 h-auto animate-point"
        />

        {/* Contact Action */}
        <div className="absolute -bottom-7 -right-5">
          <button className="bg-accent text-body px-3 py-2 rounded-md text-sm font-bold whitespace-nowrap hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-accent/20 animate-shake">
            Contact me
          </button>
        </div>
      </div>
    </>
  );
};