import profileFull from "@/shared/assets/informal.jpg";
import { ProfileImage } from "./ui/profile-image";
import { EducationSection } from "./ui/education-section";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";
import { HeaderH2 } from "@/shared/ui/header-h2";

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
    <section className="relative w-full py-10 bg-body px-3 mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <HeaderH2 text="Who am I?"/>
          <ProfileImage src={profileFull} />
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-xs text-left text-glass-white max-w-2xl mx-auto leading-relaxed">
            With over 2 years of experience in web development, I have honed my
            skills across the entire stack. My background in Telematics
            Engineering has been a game-changer; it provided me with a deep
            architectural context that I previously overlooked.{" "}
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          <EducationSection
            title="BS in Telematics Engineering"
            school="UPIITA - IPN | 2022-present"
            items={telematicsPoints}
          />
          <EducationSection
            title="Technical Degree"
            school="CECyT 11 - IPN | 2019-2022"
            items={technicalPoints}
          />
        </div>
      </div>
    </section>
  );
};
