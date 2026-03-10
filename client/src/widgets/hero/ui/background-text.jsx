/**
 * BackgroundText Component
 * Responsive, fluid typography acting as a geometric background texture.
 */
export const BackgroundText = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
    <div className="flex flex-col items-center justify-center rotate-20 sm:rotate-17 md:rotate-15 lg:rotate-10 xl:rotate-6 opacity-40 md:opacity-60">
      <div
        className="flex flex-col font-black text-dark-gray text-center uppercase whitespace-nowrap
        text-[25vw] sm:text-[20vw] md:text-[19vw] lg:text-[13vw] xl:text-[11vw]
        leading-none md:leading-[0.9] lg:leading-[1.3] xl:leading-tight
        tracking-tight sm:tracking-tight md:tracking-normal 
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
