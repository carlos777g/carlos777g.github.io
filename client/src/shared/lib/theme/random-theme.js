const PALETTES = [
  { name: "Yellow-vibe", main: "#FACC15" },
  { name: "Red-vibe", main: "#B4292B" },
  { name: "Pink-vibe", main: "#B4299B" },
  { name: "Teal-vibe", main: "#06B6D4" },
  { name: "Esmerald-vibe", main: "#10B981" },
  { name: "Violet-vibe", main: "#6F4AC2" },
];

export const applyRandomTheme = () => {
  // get the last used color
  const lastTheme = sessionStorage.getItem("last-theme");

  // filter in order the new color be diferent than last
  const available = PALETTES.filter((p) => p.name !== lastTheme);
  const selected = available[Math.floor(Math.random() * available.length)];

  // apply to DOM
  const root = document.documentElement;
  root.style.setProperty("--accent-color", selected.main);
  root.style.setProperty("--accent-color-soft", selected.soft);

  // 4. Guardar para la próxima recarga
  sessionStorage.setItem("last-theme", selected.name);

  console.log(`Theme applied: ${selected.name}`);
};
