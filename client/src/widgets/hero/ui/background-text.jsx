/**
 * BackgroundText Component
 * Responsive, fluid typography acting as a geometric background texture.
 */
export const BackgroundText = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
    <div className="flex flex-col items-center justify-center rotate-15 md:rotate-20 opacity-40 md:opacity-60">
      <div
        className="flex flex-col font-black text-dark-gray text-center uppercase whitespace-nowrap
        text-[20vw] sm:text-[20vw] md:text-[15vw] lg:text-[12vw] xl:text-[10vw]
        leading-[1.2] sm:leading-[0.85] md:leading-[0.9] lg:leading-[1.1] xl:leading-tight
        tracking-tight sm:tracking-tight md:tracking-normal lg:tracking-wide xl:tracking-widest
      "
      >
        <span>Engineer</span>
        <span>Self-Taught</span>
        <span>Freelancer</span>
        <span>Friendly</span>
        <span>Eager 2 Learn</span>
      </div>
    </div>
  </div>
);
