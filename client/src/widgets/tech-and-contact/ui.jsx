import { TECH_DATA } from "@/shared/data/tech-stack";
import { HeaderH2 } from "@/shared/ui/header-h2";
import { VerticalCarousel } from "@/shared/ui/VerticalCarousel";
import { ContactSection } from "./ui/contact-section";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";

export const TechAndContact = () => {
  return (
    <section className="w-full pt-5 px-6 bg-body">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div id="tech-stack" className="order-1 lg:order-2 flex flex-col lg:pl-12 lg:border-l lg:border-accent/30">
            <ScrollReveal>
              <div className="mb-3">
                <HeaderH2 text="My tech stack" />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid grid-cols-3 h-full">
                <VerticalCarousel title="Frontend" items={TECH_DATA.frontend} />
                <VerticalCarousel title="Backend" items={TECH_DATA.backend} />
                <VerticalCarousel title="Tools" items={TECH_DATA.tools} />
              </div>
            </ScrollReveal>
          </div>

          <div id="contact" className="order-2 lg:order-1 flex flex-col h-full justify-center sm:px-20 md:px-30 lg:px-0 lg:justify-start ">
            <ContactSection />
          </div>
        </div>
      </div>
    </section>
  );
};
