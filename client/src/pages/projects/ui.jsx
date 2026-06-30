// /src/pages/projects/ui.jsx
import { useState, useEffect } from "react";
import { getProjects } from "@/entities/project";
import { ScrollReveal, HeaderH2 } from "@/shared/ui";
import { ProjectCard } from "@/widgets/projects/ui/project-card";
import { TopNavbar } from "@/widgets/top-navbar";
import { Footer } from "@/widgets/footer";

export const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((data) => {
        const sorted = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
        setProjects(sorted);
      })
      .catch((err) => console.error("Error fetching projects:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="relative min-h-screen pt-20 pb-20">
        <TopNavbar />
        <div className="w-full min-h-screen bg-body pt-24 px-6">
          <div className="max-w-6xl mx-auto h-20 bg-muted-white/5 rounded animate-pulse" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-20 pb-20">
      <TopNavbar />

      <main className="w-full min-h-screen bg-body pt-28 pb-16 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">

          <div className="text-center mb-12">
            <ScrollReveal direction="up">
              <HeaderH2 text="All Projects" />
              <p className="text-glass-white/60 text-xs md:text-sm max-w-md mx-auto mt-3 font-mono">
                A complete archive of experiments, tools, and systems I've built.
              </p>
            </ScrollReveal>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-20 text-glass-white/40 font-mono text-sm">
              No projects found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ScrollReveal
                  key={project.id}
                  direction="up"
                  duration={400 + (index % 2) * 150}
                >
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};
