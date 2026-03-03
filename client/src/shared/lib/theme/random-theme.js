const PALETTES = [
  { name: 'yellow-vibe', main: '#FACC15', soft: 'rgba(250, 204, 21, 0.1)' },
  { name: 'red-vibe', main: '#B4292B', soft: 'rgba(239, 68, 68, 0.1)' },
  { name: 'pink-vibe', main: '#B4299B', soft: 'rgba(239, 68, 68, 0.1)'}
];

export const applyRandomTheme = () => {
  // get the last used color
  const lastTheme = sessionStorage.getItem('last-theme');
  
  // filter in order the new color be diferent than last
  const available = PALETTES.filter(p => p.name !== lastTheme);
  const selected = available[Math.floor(Math.random() * available.length)];

  // apply to DOM
  const root = document.documentElement;
  root.style.setProperty('--accent-color', selected.main);
  root.style.setProperty('--accent-color-soft', selected.soft);
  
  // 4. Guardar para la próxima recarga
  sessionStorage.setItem('last-theme', selected.name);
  
  console.log(`🎮 Theme applied: ${selected.name}`);
};