import profileImg from "@/shared/assets/icon-me.webp";
import { BackgroundText } from "./ui/background-text";
import { HeroIdentity } from "./ui/hero-identity";
import { HeroDescription } from "./ui/hero-description";
import { HeroTerminal } from "./ui/hero-terminal";

/**
 * Hero Component
 * Main assembler. Uses CSS Grid to strictly separate Identity (Left/Top) and Bio (Right/Bottom).
 */
export const Hero = () => {
  return (
    <section className="relative w-full min-h-[73vh] sm:min-h-[85vh] lg:min-h-screen lg:pt-0 overflow-hidden flex items-center lg:py-8">
      <BackgroundText />

      {/* Main Grid Layout */}
      <div className="max-w-9xl mx-auto w-full px-3 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4 md:gap-25 lg:gap-15 lg:px-20 lg:-translate-y-15 xl:gap-10 items-center relative z-10">
        
        {/* LEFT COLUMN (or TOP on mobile): Identity (Name + Image) */}
        <div className="w-full">
          <HeroIdentity image={profileImg} />
        </div>

        {/* RIGHT COLUMN (or BOTTOM on mobile): Description + Terminal */}
        <div className="flex flex-col justify-center items-start max-w-110 sm:max-w-full md:max-w-3xl  mx-auto lg:mx-0 lg:translate-y-0">
          <HeroDescription />
          <HeroTerminal />
        </div>

      </div>
    </section>
  );
};