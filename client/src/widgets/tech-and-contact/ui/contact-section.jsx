import { HeaderH2 } from "@/shared/ui/header-h2";
import { TeamWorkIcon } from "@/shared/ui/icons/team-work-icon";
import { CurvedArrowIcon } from "@/shared/ui/icons/curved-arrow-icon";
import { NewFileIcon } from "@/shared/ui/icons/new-file-icon";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";

export const ContactSection = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center text-center">
      <ScrollReveal>
        <HeaderH2
          text="Get in touch"
          leftSlot={
            <TeamWorkIcon className="w-10 h-10 md:w-14 md:h-14 text-accent" />
          }
        />
      </ScrollReveal>
      <ScrollReveal>
        <p className="text-sm leading-relaxed max-w-sm mb-8 text-muted-white">
          I'm currently open to new opportunities. If you have a project in mind
          or just want to say hi, my inbox is always open. Let's create
          something great.
        </p>
      </ScrollReveal>

      <div className="flex items-center gap-6">
        <ScrollReveal direction="left" duration="500">
          <CurvedArrowIcon className="w-12 h-12 opacity-70 animate-point-right text-accent" />
        </ScrollReveal>
        <ScrollReveal direction="left" duration="500">
          <a
            href="mailto:gcarlosjael@gmail.com"
            aria-label="Start a new project"
            className="group relative p-3"
          >
            <NewFileIcon className="w-12 h-12 opacity-70 animate-shake text-accent" />
          </a>
        </ScrollReveal>
      </div>
    </div>
  );
};
