import profileImg from "@/shared/assets/icon-me.webp";
import curvedArrowIcon from "@/shared/assets/curved-arrow.svg";
import { Icon } from "@/shared/ui/icon";

export const Hero = () => {
  return (
    // parent div of HERO icon
    <div className="w-auto">
      {/* Background Layer Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none top-10 -left-15">
        {/* The Huge Text Block */}
        <div className="flex flex-col items-center justify-center rotate-20 leading-27 opacity-60">
          <div className="flex flex-col font-black text-dark-gray text-[20vw] md:text-[15vw] tracking-tighter text-center uppercase whitespace-nowrap">
            <span>Engineer</span>
            <span>Self-Taught</span>
            <span>Freelancer</span>
            <span>Friendly</span>
            <span>Eager 2 Learn</span>
          </div>
        </div>
      </div>

      <div className="mt-25 relative w-48 h-37 ml-38">
        {/* photo frames */}
        <div className="absolute inset-0 border-3 border-glass-white rounded-2xl rotate-11 z-10" />
        <div className="absolute inset-0 border-3 border-glass-white rounded-2xl overflow-hidden rotate-6 z-10">
          <img
            src={profileImg}
            alt="Carlos Guillen icon"
            className="w-48 h-full object-cover p-1"
          />
        </div>
        {/* top text */}
        <div className="absolute -top-13 -right-12 w-max rotate-11">
          <span className="text-accent font-black text-3xl animate-pulse">
            Hello world!
          </span>
        </div>

        {/* 3. Left text*/}
        <div className="absolute -left-38 top-20 -translate-y-1/2 flex flex-col items-start z-20">
          <span className="text-accent font-bold text-md">I am</span>
          <h1 className="text-3xl font-black flex flex-col">
            <span>Carlos</span>
            <span className="relative left-5">Guillén</span>
          </h1>
          <Icon
            src={curvedArrowIcon}
            alt={"arrow-icon"}
            className="brightness-0 invert relative -top-21 left-32 w-17 h-auto"
          />
          <div className="absolute -bottom-7 -right-5 z-20">
            <button className="bg-accent text-body px-3 py-2 rounded-md text-sm font-bold whitespace-nowrap hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-accent/20">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
