import { useState, useEffect } from "react";
import { TERMINAL_SEQUENCES } from "./terminal-data";

/**
 * Utility function to pause execution
 * @param {number} ms - Milliseconds to sleep
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const useTerminalLoop = () => {
  const [commandLine, setCommandLine] = useState("");
  const [outputs, setOutputs] = useState([]);
  const [clearLine, setClearLine] = useState("");
  const [phase, setPhase] = useState("TYPING_CMD"); // "TYPING_CMD" | "SHOWING_OUTPUT" | "TYPING_CLEAR"

  useEffect(() => {
    let isMounted = true;

    const runAnimationLoop = async () => {
      while (isMounted) {
        for (const seq of TERMINAL_SEQUENCES) {
          // 1. Reset State for new sequence
          setCommandLine("");
          setOutputs([]);
          setClearLine("");
          setPhase("TYPING_CMD");

          // 2. Type the main command
          for (let i = 1; i <= seq.command.length; i++) {
            if (!isMounted) return;
            setCommandLine(seq.command.slice(0, i));
            await sleep(70); // Human typing speed
          }

          await sleep(400); // Simulate human pressing 'Enter'
          if (!isMounted) return;
          setPhase("SHOWING_OUTPUT");

          // 3. Show system output lines
          for (let i = 0; i < seq.output.length; i++) {
            if (!isMounted) return;
            setOutputs((prev) => [...prev, seq.output[i]]);
            await sleep(200); // Machine processing speed
          }

          // 4. Wait for user to read the output
          await sleep(2500); 
          if (!isMounted) return;
          setPhase("TYPING_CLEAR");

          // 5. Type 'clear' command
          const clearCmd = "clear";
          for (let i = 1; i <= clearCmd.length; i++) {
            if (!isMounted) return;
            setClearLine(clearCmd.slice(0, i));
            await sleep(100);
          }

          // 6. Pause briefly before actually clearing the screen
          await sleep(400);
        }
      }
    };

    runAnimationLoop();

    // Cleanup function prevents memory leaks if component unmounts
    return () => {
      isMounted = false;
    };
  }, []);

  return { commandLine, outputs, clearLine, phase };
};