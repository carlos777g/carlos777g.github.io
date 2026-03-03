export const HomePage = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-5xl font-bold text-accent">Consola de Comandos</h1>
      <p className="border border-accent/30 bg-accent-soft px-4 py-2 rounded text-accent">
        [ Sistema Inicializado ]
      </p>
      <button 
        onClick={() => window.location.reload()}
        className="mt-8 px-6 py-2 border-2 border-accent text-accent hover:bg-accent hover:text-slate-950 transition-all font-mono"
      >
        RECARGAR PARA CAMBIAR PALETA
      </button>
    </main>
  );
};