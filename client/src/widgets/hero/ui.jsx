import profileImg from "@/shared/assets/icon-me.webp";
import { BackgroundText } from "./ui/background-text";
import { ProfileFrame } from "./ui/profile-frame";
import { HeroInfo } from "./ui/hero-info";
import { HeroDescription } from "./ui/hero-description";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[75vh] overflow-hidden">
      <BackgroundText />

      <div className="mt-25 relative w-48 aspect-48/37 ml-38">
        <ProfileFrame image={profileImg} />
        <HeroInfo />
      </div>
      <HeroDescription />
    </section>
  );
};
