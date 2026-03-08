import { TECH_DATA } from "@/shared/data/tech-stack";
import { HeaderH2 } from "@/shared/ui/header-h2";
import { VerticalCarousel } from "@/shared/ui/VerticalCarousel";
import {ContactSection} from "./ui/contact-section"

export const TechAndContact = () => {
  return (
    <section className="w-full py-24 px-6 bg-body">
      <div className="max-w-7xl mx-auto">
        
        {/* Usamos Grid para asegurar un split 50/50 exacto en Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
          
          {/* LADO IZQUIERDO: Tech Stack */}
          {/* md:border-r md:border-accent/30 crea tu línea vertical divisoria */}
          <div className="flex flex-col md:pr-12 md:border-r md:border-accent/30">
            
            <div className="mb-3">
              <HeaderH2 text="My tech stack" />
            </div>

            {/* Sub-grid para los 3 carruseles paralelos */}
            <div className="grid grid-cols-3 h-full">
              <VerticalCarousel title="Frontend" items={TECH_DATA.frontend} />
              <VerticalCarousel title="Backend" items={TECH_DATA.backend} />
              <VerticalCarousel title="Tools" items={TECH_DATA.tools} />
            </div>

          </div>

          {/* LADO DERECHO: Contacto */}
         <div className="flex flex-col md:pl-12 h-full justify-center">
             <ContactSection />
          </div>

        </div>
      </div>
    </section>
  );
};