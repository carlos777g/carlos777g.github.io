// src/shared/data/tech-stack.js (or your current config path)
import { TECH_LOGOS } from "@/shared/assets";

/**
 * Static Data for the Tech Stack Carousel.
 * Consumes the centralized static asset registry.
 */
export const TECH_DATA = {
  frontend: [
    { name: "React", src: TECH_LOGOS.react, alt: "React icon" },
    { name: "Tailwind", src: TECH_LOGOS.tailwindcss, alt: "Tailwind CSS icon" },
    { name: "HTML", src: TECH_LOGOS.html, alt: "HTML5 icon" },
    { name: "CSS", src: TECH_LOGOS.css, alt: "CSS3 icon" },
  ],
  backend: [
    { name: "Node.js", src: TECH_LOGOS.nodejs, alt: "Node.js icon" },
    { name: "JavaScript", src: TECH_LOGOS.javascript, alt: "JavaScript Icon" },
    { name: "PostgreSQL", src: TECH_LOGOS.postgresql, alt: "PostgreSQL icon" },
    { name: "MongoDB", src: TECH_LOGOS.mongodb, alt: "MongoDB icon" },
  ],
  tools: [
    { name: "Linux", src: TECH_LOGOS.linux, alt: "Linux icon" },
    { name: "Git", src: TECH_LOGOS.git, alt: "Git icon" },
    { name: "VS Code", src: TECH_LOGOS.vscode, alt: "VS Code icon" },
    { name: "Docker", src: TECH_LOGOS.docker, alt: "Docker icon" },
  ],
};