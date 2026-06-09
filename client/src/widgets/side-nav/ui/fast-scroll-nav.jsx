// src/widgets/side-nav/ui/fast-scroll-nav.jsx
import React, { useState, useEffect, useRef } from "react";
import { NavIcon } from "./nav-icon";

// Actualizamos el array con las IDs reales que existiran en tu DOM
const SECTIONS = ["who-am-i", "projects", "blog", "tech-stack", "contact"];

export const FastScrollNav = () => {
  const [isBlinking, setIsBlinking] = useState(true);
  const isLocked = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsBlinking(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWheel = (e) => {
    if (isLocked.current) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    let currentIndex = 0;
    let minDistance = Infinity;

    SECTIONS.forEach((id, index) => {
      const el = document.getElementById(id);
      if (el) {
        const distance = Math.abs(el.getBoundingClientRect().top);
        if (distance < minDistance) {
          minDistance = distance;
          currentIndex = index;
        }
      }
    });

    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= SECTIONS.length) nextIndex = SECTIONS.length - 1;

    if (nextIndex !== currentIndex) {
      const targetEl = document.getElementById(SECTIONS[nextIndex]);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
        isLocked.current = true;
        setTimeout(() => {
          isLocked.current = false;
        }, 100);
      }
    }
  };

  return (
    <nav
      onWheel={handleWheel}
      className={`backdrop-blur-lg flex flex-col gap-4 relative p-3 rounded-full transition-colors duration-1000 ${
        isBlinking ? "bg-glass-white/10 animate-pulse" : "bg-transparent"
      }`}
    >
      <div className="absolute left-1/2 top-4 bottom-4 w-px bg-glass-white/10 -z-10 -translate-x-1/2" />

      {/* If wanna change the symbols in the left navbar, just replace property "name"
      below for the name of the symbol you want in /src/shared/ui/icons/icon-registry.jsx*/}

      <NavIcon href="#who-am-i" name="user" label="Who is Carlos?" />
      <NavIcon href="#projects" name="pen-writing" label="Projects" /> 
      <NavIcon href="#blog" name="blog" label="Technical articles" />
      {/* <NavIcon href="#tech-stack" name="terminal" label="Tech Skills" /> */}
      <NavIcon href="#contact" name="message" label="Contact" />
    </nav>
  );
};