// /src/widgets/projects/ui.jsx
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "@/entities/project";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";
import { HeaderLink, HeaderH2 } from "@/shared/ui";
import { ProjectCard } from "./ui/project-card";
import { useMediaQuery } from "@/shared/lib/hooks/use-media-query";

const getRandomProjects = (projects, count) => {
  const shuffled = [...projects].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    getProjects()
      .then(setAllProjects)
      .catch((err) => console.error("Error fetching projects:", err))
      .finally(() => setLoading(false));
  }, []);

  const visibleCount = isDesktop ? 4 : 2;
  const projects = useMemo(
  () => getRandomProjects(allProjects, visibleCount),
  [allProjects, visibleCount]
);

  if (loading) {
    return (
      <section className="w-full py-10 px-3 bg-body">
        <div className="max-w-6xl mx-auto">
          <div className="h-8 w-48 bg-muted-white/10 rounded animate-pulse mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="aspect-video bg-muted-white/10 rounded-md animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) return null;

  return (
    <section className="w-full py-10 px-3 bg-body">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              duration={600 + index * 150}
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 w-full flex justify-center">
          <ScrollReveal direction="up" duration={300} fullWidth={false}>
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-glass-white/10 bg-glass-white/5 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 active:scale-95 w-fit mx-auto"
            >
              <span className="text-sm md:text-base font-bold tracking-wider text-muted-white group-hover:text-accent transition-colors duration-300">
                See more projects
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15" className="text-muted-white group-hover:text-accent transition-all duration-300 group-hover:translate-x-1">
                <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
