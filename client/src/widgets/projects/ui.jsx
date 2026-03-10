import { PROJECTS_DATA } from "@/shared/data/projects";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";
import { HeaderLink } from "./ui/header-link";
import { ProjectCard } from "./ui/project-card";
import { HeaderH2 } from "@/shared/ui/header-h2";
// import { githubIcon } from "@/shared/assets/github.svg"; // El componente con el hover del GitHub y la flecha

export const Projects = () => {
  return (
    <section className="w-full py-10 px-3 bg-body">
      <div className="max-w-6xl mx-auto">
        {/* Header Layout: Flexbox to align Title and the Link */}
        <HeaderH2
          text="Featured projects"
          actionSlot={
            <HeaderLink
              href="https://github.com/carlos777g"
              icon1Name="github"
              icon2Name="arrow"
            />
          }
        />

        {/* CSS Grid for Project Cards */}
        {/* 1 col on mobile, 2 on tablet/desktop. 
            If you get more than 4 projects, you can change lg:grid-cols-3 later. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            // Stagger the animation duration based on index for a cascading effect
            <ScrollReveal
              key={project.id}
              direction="up"
              duration={600 + index * 150}
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
