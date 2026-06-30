// /src/shared/lib/theme/random-theme.js
const PALETTES = [
  { name: "Yellow-vibe", main: "#FACC15" },
  { name: "Red-vibe", main: "#B4292B" },
  { name: "Pink-vibe", main: "#B4299B" },
  { name: "Teal-vibe", main: "#06B6D4" },
  { name: "Esmerald-vibe", main: "#10B981" },
  { name: "Violet-vibe", main: "#6F4AC2" },
];

const THEME_STORAGE_KEY = "user-theme";

function pickRandomPalette(excludeName = null) {
  const available = excludeName
    ? PALETTES.filter((p) => p.name !== excludeName)
    : PALETTES;
  return available[Math.floor(Math.random() * available.length)];
}

function applyPalette(selected) {
  const root = document.documentElement;
  root.style.setProperty("--accent-color", selected.main);
  localStorage.setItem(THEME_STORAGE_KEY, selected.name);
  window.dispatchEvent(new CustomEvent("theme-changed", { detail: selected.main }));
  return selected.main;
}

// Called once on app load: restores saved theme, or picks one if none exists
export const applyInitialTheme = () => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  const storedPalette = PALETTES.find((p) => p.name === stored);
  const selected = storedPalette ?? pickRandomPalette();
  return applyPalette(selected);
};

// Called by the navbar button: always generates a new random color, avoiding the current one
export const cycleRandomTheme = () => {
  const current = localStorage.getItem(THEME_STORAGE_KEY);
  const selected = pickRandomPalette(current);
  return applyPalette(selected);
};
