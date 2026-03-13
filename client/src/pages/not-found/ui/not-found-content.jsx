import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const NotFoundContent = () => {
  const DEFAULT_MESSAGE =
    "The requested route was not found in the routing table. Check the address or return to the main network environment.";

  const [errorMessage, setErrorMessage] = useState(DEFAULT_MESSAGE);
  const [easterEggUnlocked, setEasterEggUnlocked] = useState(false);

  // 1. Fetching Seguro con Fallback y Timeout
  useEffect(() => {
    const controller = new AbortController();

    const fetchFunMessage = async () => {
      try {
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        const res = await fetch("https://naas.isalman.dev/no", {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });

        clearTimeout(timeoutId);

        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();

        if (data && data.reason) {
          setErrorMessage(data.reason);
        }
      } catch (error) {
        if (error.name === 'AbortError') return;
        console.warn(`${error}: 404 Message Fetch failed: Using local fallback.`);
      }
    };

    fetchFunMessage();

    // Cleanup function
    return () => controller.abort();
  }, []);

  // Easter egg
  useEffect(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let konamiPosition = 0;

    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiPosition]) {
        konamiPosition++;
        if (konamiPosition === konamiCode.length) {
          setEasterEggUnlocked(true);
          konamiPosition = 0; 
        }
      } else {
        konamiPosition = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-[120px] md:text-[200px] font-black text-accent opacity-20 select-none leading-none">
        404
      </h1>

      <div
        className={`relative -mt-16 md:-mt-24 z-10 border border-glass-white/10 bg-body p-8 md:p-12 rounded-xl max-w-lg w-full shadow-2xl transition-colors duration-500 ${easterEggUnlocked ? "border-accent shadow-accent/20" : ""}`}
      >
        {easterEggUnlocked ? (
          <div className="animate-breathe">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">
              ROOT_ACCESS_GRANTED
            </h2>
            <p className="mb-8 text-sm md:text-base font-mono">
              You found the hidden backdoor. The system is yours, engineer.{" "}
              <br />
              <br />
              (Fun fact: Telematics protocols rarely forgive missing packets,
              but I do).
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-glass-white">
              Packet_Lost
            </h2>
            <p className="mb-8 text-sm md:text-base leading-relaxed">
              {errorMessage}
            </p>
          </div>
        )}

        <Link
          to="/"
          className="inline-block px-8 py-3 bg-accent text-body font-bold rounded-md hover:scale-105 transition-transform active:scale-95"
        >
          {easterEggUnlocked ? "INITIALIZE_SYSTEM" : "RETURN_TO_HOME"}
        </Link>
      </div>
    </div>
  );
};
