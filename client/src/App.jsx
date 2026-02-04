import { useEffect, useState } from "react";
import viewsDesing from "/allViewsFigmaDesing.png";
import mobileView from "/mobileViewDesing.png";

function App() {
  const [backendData, setBackendData] = useState(null);
  const figmaLink =
    "https://www.figma.com/design/628q2Cs8DrHlk0aTnrx1Jl/Untitled?node-id=0-1&t=Msns3Xfo9u5gLUVO-1";

  useEffect(() => {
    // Hacemos la petición al backend
    fetch("https://api.carworks.dev/api/status")
      .then((res) => res.json())
      .then((data) => setBackendData(data))
      .catch((err) => console.error("Error connecting to backend:", err));
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col items-center justify-center p-6 sm:p-12">
      {/* Encabezado */}
      <header className="max-w-3xl text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-l from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Building something new.
        </h1>

        {/* Aquí mostramos la respuesta del Backend si existe */}
        {backendData ? (
          <div className="mb-6 p-2 border border-emerald-500/30 bg-emerald-500/10 rounded-lg inline-block">
            <p className="text-emerald-400 text-sm">
               {backendData.connected_backend_message} — My LinkeIn profile: <a href={backendData.profile_url}>{backendData.my_name}</a>
            </p>
          </div>
        ) : (
          <p className="text-zinc-500 text-sm mb-6 italic text-center">
            Connecting to backend...
          </p>
        )}

        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
          In this moment I am working on my web page, here is what I am working
          on:
        </p>
      </header>

      {/* Grid de Imágenes/Proyectos */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Vista Desktop */}
        <a
          href={figmaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 transition-all hover:border-zinc-500"
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={viewsDesing}
              alt="Desktop views design"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
              Figma Design
            </p>
            <h2 className="text-xl font-semibold">Full Layout Concept</h2>
          </div>
        </a>

        {/* Vista Mobile */}
        <a
          href={figmaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 transition-all hover:border-zinc-500"
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={mobileView}
              alt="Mobile view design"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
              Figma Design
            </p>
            <h2 className="text-xl font-semibold">Mobile Responsive UI</h2>
          </div>
        </a>
      </main>

      {/* Pie de página con enlace directo */}
      <footer className="mt-20 text-zinc-500 text-sm">
        <p>
          Want to see the interactive prototype?
          <a href={figmaLink} className="text-blue-400 hover:underline ml-1">
            Check it out on Figma
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
