import { Icon } from "@/shared/ui/icon";
import { ProfileFrame } from "./profile-frame";
import { CurvedArrowIcon } from "@/shared/ui/icons/curved-arrow-icon";

/**
 * HeroIdentity Component
 * Uses Flexbox to separate typography and the profile frame horizontally.
 */
export const HeroIdentity = ({ image }) => {
  return (
    <div className="flex items-center justify-around w-full relative md:translate-y-10 lg:translate-y-14">
      {/* 1. LEFT SIDE: Typography & CTA */}
      <div className="flex flex-col items-start -translate-y-4 z-20 lg:-translate-y-12 xl:translate-x-10 shrink-0">
        <span className="text-accent font-black text-sm sm:text-lg md:text-xl tracking-widest">
          I am
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-black flex flex-col leading-[1.2]">
          <span>Carlos</span>
          {/* ml-4 indents the last name slightly for typographic tension */}
          <span className="ml-5 md:ml-8 ">Guillén</span>
        </h1>

        <button className="ml-5 mt-9 cursor-pointer bg-accent text-body px-3 py-2 rounded-md text-sm sm:text-base sm:px-4 sm:mt-7  md:text-lg md:mt-10 md:ml-10 md:px-7 md:py-3 lg:text-md lg:py-2 lg:px-3 lg:ml-9 lg:translate-y-11 font-bold whitespace-nowrap hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-accent/20 animate-shake">
          Contact me
        </button>
      </div>

      {/* 2. CENTER: The Overlapping Arrow */}
      {/* Absolute positioning is mathematically justified here to bridge the flex gap */}
      <CurvedArrowIcon className="absolute left-1/2 top-1 -translate-x-15 w-16 sm:w-25 sm:-translate-x-20 md:w-35 md:-translate-x-32 md:-top-5 lg:w-20 lg:-translate-x-15 lg:-top-12 xl:translate-y-5  text-glass-white animate-point pointer-events-none z-30" />

      {/* 3. RIGHT SIDE: Profile Frame & Floating Text */}
      <div className="relative shrink-0 lg:-translate-y-10 lg:translate-x-5 xl:translate-x-4">
        {/* Floating Greeting */}
        <div className="absolute -top-20 -right-7 sm:-right-10 md:-top-24 md:-right-13 lg:-top-25 lg:-right-2 w-max rotate-12 z-30 pointer-events-none">
          <span className="text-accent font-black text-2xl sm:text-3xl md:text-4xl lg:text-3xl animate-breathe inline-block drop-shadow-md">
            Hello world!
          </span>
        </div>

        {/* The Frame scales naturally across breakpoints */}
        <div className="-translate-y-8 relative w-48 sm:w-67 md:w-80 lg:w-60 xl:w-74 aspect-48/37 z-20">
          <ProfileFrame image={image} />
        </div>
      </div>
    </div>
  );
};
