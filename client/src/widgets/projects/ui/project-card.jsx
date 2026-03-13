/**
 * ProjectCard Component
 * Displays individual project data with rigid structural constraints and clean hover states.
 */
export const ProjectCard = ({ project }) => {
  return (
    <article className="group flex flex-col rounded-md overflow-hidden bg-transparent">
      <a
        href={project.liveUrl || project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group/image relative w-full aspect-video overflow-hidden block cursor-pointer"
      >
        <img
          src={project.image}
          alt={`Preview of ${project.title}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-200 group-hover/image:scale-103"
        />

        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover/image:opacity-90 transition-all duration-200 flex items-center justify-center">
          <span className="flex items-center gap-2 font-itim font-bold text-2xl opacity-0 translate-y-4 group-hover/image:opacity-100 group-hover/image:translate-y-0 transition-all duration-200 delay-75">
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="group-hover/image:translate-x-1 group-hover/image:-translate-y-1 transition-transform duration-300"
            >
              <path
                fill="currentColor"
                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"
              />
            </svg>
          </span>
        </div>
      </a>

      {/* 2. Content Section */}
      <div className="flex flex-col grow ">
        {/* Header: Title and Meta (Stars/Icons) */}
        <div className="flex justify-between items-start gap-4 my-3">
          <h3 className="text-md font-extrabold tracking-tight text-accent">
            {project.title}
          </h3>

          {/* Meta Icons */}
          <div className="flex items-center gap-2 text-glass-white/60 shrink-0">
            {/* 1. Star Icon */}
            {project.stars > 0 && (
              <span className="flex items-end gap-1 text-sm font-mono cursor-default">
                {project.stars}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="transition-all duration-300 hover:text-accent hover:rotate-12 hover:scale-110"
                >
                  <path
                    fill="currentColor"
                    d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm-1.525 2.098l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102zM12 12.25"
                  />
                </svg>
              </span>
            )}

            {/* 2. GitHub Icon */}
            <a
              href={project.githubUrl}
              aria-label="GitHub Repository"
              target="_blank"
              rel="noopener noreferrer"
              // Animación inyectada en el enlace (<a>)
              className="transition-all duration-300 hover:text-accent hover:rotate-12 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                />
              </svg>
            </a>

            {/* 3. Live URL Arrow Icon */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                aria-label="Live Demo"
                target="_blank"
                rel="noopener noreferrer"
                // Animación inyectada en el enlace (<a>)
                className="transition-all duration-300 hover:text-accent hover:rotate-12 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="currentColor"
                    d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* 3. Description */}
        <p className="text-glass-white text-sm leading-relaxed mb-5 grow">
          {project.description}
        </p>

        {/* 4. Tech Stack Flex Blocks */}
        <ul className="flex flex-wrap gap-2 mb-3 border-glass-white/10">
          {project.stack.map((tech, index) => (
            <li
              key={index}
              className="px-3 py-1 text-xs font-extralight bg-muted-white/10 text-glass-white rounded-xl"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
