/**
 * Static Data for the Tech Stack Carousel.
 * Uses explicit Vite asset imports for raster/vector images retaining original colors.
 */
import reactIcon from "@/shared/assets/react.svg";
import tailwindIcon from "@/shared/assets/tailwindcss.svg";
import jsIcon from "@/shared/assets/javascript.svg";
import htmlIcon from "@/shared/assets/html.svg";
import cssIcon from "@/shared/assets/css.svg";

import nodeIcon from "@/shared/assets/nodejs.svg";
import pgIcon from "@/shared/assets/postgresql.svg";
import mongoIcon from "@/shared/assets/mongodb.svg";

import linuxIcon from "@/shared/assets/linux.svg";
import gitIcon from "@/shared/assets/git.svg";
import vscodeIcon from "@/shared/assets/vscode.svg";
import dockerIcon from "@/shared/assets/docker.svg";
// import terminalIcon from "@/shared/assets/terminal.svg";

export const TECH_DATA = {
  frontend: [
    { name: "React", src: reactIcon, alt: "React icon" },
    { name: "Tailwind", src: tailwindIcon, alt: "Tailwind CSS icon" },
    { name: "HTML", src: htmlIcon, alt: "HTML5 icon" },
    { name: "CSS", src: cssIcon, alt: "CSS3 icon" },
  ],
  backend: [
    { name: "Node.js", src: nodeIcon, alt: "Node.js icon" },
    { name: "JavaScript", src: jsIcon, alt: "JavaScript Icon" },
    { name: "PostgreSQL", src: pgIcon, alt: "PostgreSQL icon" },
    { name: "MongoDB", src: mongoIcon, alt: "MongoDB icon" },
  ],
  tools: [
    { name: "Linux", src: linuxIcon, alt: "Linux icon" },
    { name: "Git", src: gitIcon, alt: "Git icon" },
    { name: "VS Code", src: vscodeIcon, alt: "VS Code icon" },
    { name: "Docker", src: dockerIcon, alt: "Docker icon" },
  ],
};
