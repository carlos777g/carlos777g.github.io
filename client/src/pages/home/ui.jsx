import { TopNavbar } from "@/widgets/top-navbar";
import { BottomNavbar } from "@/widgets/bottom-navbar";
import { Hero } from "@/widgets/hero";
import { ScrollPhrases } from "@/widgets/scroll-phrases";
import { WhoAmI } from "@/widgets/who-am-i";
import { Projects } from "@/widgets/projects";

export const HomePage = () => {
  return (
    <div className="relative min-h-[200vh] pt-20 pb-20">
      {/* Dummy height for scroll test */}
      <TopNavbar />
      <main>
        <Hero />
        <ScrollPhrases />
        <WhoAmI />
        <Projects />
      </main>
      <BottomNavbar />
    </div>
  );
};
