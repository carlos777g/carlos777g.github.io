import { HeaderH2, ScrollReveal, Icon } from "@/shared/ui";

/**
 * ContactSection Component
 * Provides clear Call to Action hooks for user communication.
 */
export const ContactSection = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center lg:justify-start text-center">
      <ScrollReveal>
        <HeaderH2
          text="Get in touch"
          leftSlot={
            <Icon name="team-work" className="w-10 h-10 md:w-14 md:h-14 text-accent" />
          }
        />
      </ScrollReveal>
      
      <ScrollReveal>
        <p className="text-sm leading-relaxed max-w-xl mx-auto mb-8">
          I'm currently open to new opportunities. If you have a project in mind
          or just want to say hi, my inbox is always open. Let's create
          something great.
        </p>
      </ScrollReveal>

      <div className="flex items-center gap-6">
        <ScrollReveal direction="left" duration="500">
          <Icon name="curved-arrow" className="w-12 h-12 opacity-70 animate-point-right text-accent" />
        </ScrollReveal>
        
        <ScrollReveal direction="left" duration="500">
          <a
            href="mailto:gcarlosjael@gmail.com"
            aria-label="Start a new project"
            className="group relative p-3"
          >
            <Icon name="new-file" className="w-12 h-12 opacity-70 animate-shake text-accent transition-transform duration-200 hover:scale-120" />
          </a>
        </ScrollReveal>
      </div>
    </div>
  );
};