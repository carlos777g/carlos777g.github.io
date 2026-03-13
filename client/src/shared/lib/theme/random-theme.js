const PALETTES = [
  { name: "Yellow-vibe", main: "#FACC15" },
  { name: "Red-vibe", main: "#B4292B" },
  { name: "Pink-vibe", main: "#B4299B" },
  { name: "Teal-vibe", main: "#06B6D4" },
  { name: "Esmerald-vibe", main: "#10B981" },
  { name: "Violet-vibe", main: "#6F4AC2" },
];

export const applyRandomTheme = () => {
  const lastTheme = sessionStorage.getItem("last-theme");

  const available = PALETTES.filter((p) => p.name !== lastTheme);
  const selected = available[Math.floor(Math.random() * available.length)];

  const root = document.documentElement;
  root.style.setProperty("--accent-color", selected.main);
  

  sessionStorage.setItem("last-theme", selected.name);
  console.log(`Theme applied: ${selected.name}`);

  window.dispatchEvent(new CustomEvent("theme-changed", { detail: selected.main }));
  return selected.main;
};