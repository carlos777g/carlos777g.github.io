import { useTerminalLoop } from "./terminal/use-terminal-loop";
import { TerminalPrompt } from "./terminal/terminal-prompt";

/**
 * HeroTerminal Component
 * Orchestrates the UI for the simulated terminal animation.
 */
export const HeroTerminal = () => {
  const { commandLine, outputs, clearLine, phase } = useTerminalLoop();

  return (
    <div className="hidden lg:flex flex-col w-full max-w-lg mt-10 bg-black rounded-lg border-accent border-3 overflow-hidden shadow-2xl">
      
      {/* Terminal Body */}
      <div className="p-4 font-mono text-xs md:text-sm min-h-65 xl:min-h-70 whitespace-pre-wrap">
        
        {/* Step 1: Main Command Line */}
        <div>
          <TerminalPrompt />
          <span>{commandLine}</span>
          {/* Cursor blinks only when actively typing the main command */}
          {phase === "TYPING_CMD" && <span className="animate-pulse">_</span>}
        </div>

        {/* Step 2: System Outputs */}
        {outputs.map((line, index) => (
          <div key={`out-${index}`} className="mt-1 text-glass-white/80">
            {line}
          </div>
        ))}

        {/* Step 3: Clear Command Line (Appears at the bottom after output) */}
        {phase === "TYPING_CLEAR" && (
          <div className="mt-1">
            <TerminalPrompt />
            <span>{clearLine}</span>
            <span className="animate-pulse">_</span>
          </div>
        )}

      </div>
    </div>
  );
};