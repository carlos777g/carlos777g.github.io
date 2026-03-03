const PALETTES = [
  { name: 'yellow-vibe', main: '#FACC15', soft: 'rgba(250, 204, 21, 0.1)' },
  { name: 'red-vibe', main: '#B4292B', soft: 'rgba(239, 68, 68, 0.1)' }
];

export const applyRandomTheme = () => {
  // 1. Obtener el último color usado
  const lastTheme = sessionStorage.getItem('last-theme');
  
  // 2. Filtrar para que el nuevo sea distinto al anterior
  const available = PALETTES.filter(p => p.name !== lastTheme);
  const selected = available[Math.floor(Math.random() * available.length)];

  // 3. Aplicar al DOM
  const root = document.documentElement;
  root.style.setProperty('--accent-color', selected.main);
  root.style.setProperty('--accent-color-soft', selected.soft);
  
  // 4. Guardar para la próxima recarga
  sessionStorage.setItem('last-theme', selected.name);
  
  console.log(`🎮 Theme applied: ${selected.name}`);
};