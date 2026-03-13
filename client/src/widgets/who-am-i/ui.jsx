import profileFull from "@/shared/assets/informal.jpg";
import { ProfileImage } from "./ui/profile-image";
import { EducationSection } from "./ui/education-section";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";
import { HeaderH2 } from "@/shared/ui/header-h2";
import { PixelArtSparklesIcon } from "@/shared/ui/icons/pixel-art-sparkles.jsx";
import { PixelArtHexagonIcon } from "@/shared/ui/icons/pixel-art-hexagon.jsx";
import { LinesWallIcon } from "@/shared/ui/icons/lines-wall-icon.jsx";
import { DevIcon } from "@/shared/ui/icons/dev.jsx";
import { FileIcon } from "@/shared/ui/icons/file.jsx";
import { RandomIconBackground } from "@/shared/ui/random-icon-background";

export const WhoAmI = () => {
  const telematicsPoints = [
    "Telematics Specialist: Expert focus on computer systems applied to telecommunications.",
    "Network & Data: Deep knowledge of network protocols and data transmission.",
    "IoT & Integration: Strong expertise in IoT architecture and systems integration.",
    "Operating systems and web development.",
    "Academic Engagement: Attended WITCOM (Telematics and Computing) conferences to stay at the forefront of computing science.",
  ];

  const technicalPoints = [
    "Hardware maintenance and low-level system configuration.",
    "Introduction to Linux administration and networking basics.",
    "Early full-stack experimentation with web technologies.",
    "Studied C++ programming.",
  ];

  return (
    <section
      id="who-am-i"
      className="relative w-full py-16 bg-body px-6 mt-10 overflow-hidden"
    >
      <RandomIconBackground count={3}/>
      <div className="hidden lg:block opacity-30 absolute top-30 left-0 z-0 text-accent">
        <LinesWallIcon className="w-25 fill-accent" />
      </div>

      <div className="hidden lg:block opacity-30 absolute bottom-0 right-0 z-0 text-accent">
        <LinesWallIcon className="w-25 fill-accent" />
      </div>

      <div className="hidden lg:block opacity-70 absolute top-55 right-15 z-0 text-accent">
        <DevIcon className="w-15 fill-accent" />
      </div>

      <div className="hidden lg:block opacity-70 absolute bottom-20 right-35 z-0 text-accent">
        <FileIcon className="w-15 rotate-34 fill-accent" />
      </div>

      <div className="hidden lg:block absolute bottom-20 left-12 xl:left-24 z-0 opacity-10 text-glass-white animate-point">
        <PixelArtHexagonIcon className="w-24 h-24" />
      </div>

      <div className="hidden lg:block absolute bottom-32 right-16 xl:right-32 z-0 opacity-20 text-accent animate-breathe">
        <PixelArtSparklesIcon className="w-12 h-12" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-12">
          <ScrollReveal>
            <HeaderH2 text="Who am I?" />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 ">
          {/* Left column */}
          <div className="flex justify-center items-center lg:justify-end lg:sticky lg:top-24 w-full">
            <ScrollReveal direction="left" duration="500">
              <ProfileImage src={profileFull} />
            </ScrollReveal>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4 text-left w-full sm:px-13 md:px-30 lg:px-0 lg:pr-20">
            <ScrollReveal>
              <p className="text-sm leading-relaxed">
                With over 2 years of experience in web development, I have honed
                my skills across the entire stack. My background in Telematics
                Engineering has been a game-changer; it provided me with a deep
                architectural context that I previously overlooked.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-4 w-full">
              <EducationSection
                title="BS in Telematics Engineering"
                school="UPIITA - IPN | 2022-present"
                items={telematicsPoints}
                Icon={PixelArtSparklesIcon}
              />
              <EducationSection
                title="Technical Degree"
                school="CECyT 11 - IPN | 2019-2022"
                items={technicalPoints}
                Icon={PixelArtHexagonIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
