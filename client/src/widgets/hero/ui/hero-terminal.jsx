import { useState, useEffect } from "react";

export const HeroTerminal = () => {
  const [text, setText] = useState("");
  const fullText = "sudo systemctl start telematics_engine.service\n> Initializing network protocols...\n> Connecting to full-stack environment...\n> Ready.";

  // Efecto de máquina de escribir
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, 50); // Velocidad de escritura
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="hidden lg:flex flex-col w-full max-w-lg mt-10 bg-[#1a1b26] rounded-lg border border-glass-white/10 overflow-hidden shadow-2xl">
      {/* Barra de título de la ventana */}
      <div className="flex items-center px-4 py-2 bg-[#16161e] border-b border-glass-white/5 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-[10px] text-glass-white/40 font-mono">carlos@carworks:~</span>
      </div>
      {/* Cuerpo de la terminal */}
      <div className="p-4 font-mono text-xs md:text-sm text-accent min-h-[120px] whitespace-pre-wrap">
        <span className="text-glass-white/70">$</span> {text}
        <span className="animate-pulse">_</span>
      </div>
    </div>
  );
};