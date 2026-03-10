/**
 * Centralized mock database for projects.
 * Easily scalable to an external API or CMS in the future.
 */
import cellularImg from "@/shared/assets/projects/celular-system.png";

export const PROJECTS_DATA = [
  {
    id: "proj-1",
    title: "Cellular System Simulation",
    description:
      "A comprehensive simulation of cellular network protocols and mobile connectivity dynamics.",
    image: cellularImg,
    githubUrl:
      "https://github.com/carlos777g/simulacion-de-sistema-celular.git",
    liveUrl: "https://carworks.dev",
    stars: 1,
    stack: ["Python"],
  },
  // {
  //   id: "proj-2",
  //   title: "Resume Generator",
  //   description:
  //     "An automated tool designed to generate professional CVs based on user-provided data.",
  //   image: cellularImg,
  //   githubUrl: "https://github.com/carlos777g/curriculum.git",
  //   liveUrl: "https://carworks.dev",
  //   stars: 8,
  //   stack: ["HTML", "CSS", "Tailwind CSS"],
  // },
];
