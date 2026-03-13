import { TopNavbar } from "@/widgets/top-navbar";
import { BottomNavbar } from "@/widgets/bottom-navbar";
import { Hero } from "@/widgets/hero";
import { ScrollPhrases } from "@/widgets/scroll-phrases";
import { WhoAmI } from "@/widgets/who-am-i";
import { Projects } from "@/widgets/projects";
import { TechAndContact } from "@/widgets/tech-and-contact";
import { Footer } from "@/widgets/footer";
import { SideNavWidget } from "@/widgets/side-nav";

export const HomePage = () => {
  return (
    <div className="relative min-h-[200vh] pt-20 pb-20">
      <TopNavbar />
      <SideNavWidget />
      <main>
        <Hero />
        <ScrollPhrases />
        <section id="who-am-i">
          <WhoAmI />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <TechAndContact />
        <Footer />
      </main>
      <BottomNavbar />
    </div>
  );
};
