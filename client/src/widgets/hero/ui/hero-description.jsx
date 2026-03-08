/**
 * HeroDescription Sub-component
 * Contains the professional role and a short bio/slogan.
 */
export const HeroDescription = () => {
  return (
    <div className="flex flex-col gap-0 mt-14 pr-10 pl-2 md:mt-0 md:px-0 text-right items-end">
      {/* Role / Accent Text */}
      <h3 className="text-accent font-bold text-md tracking-tighter z-10">
        Telematics Engineer in the
      </h3>
      <h3 className="text-accent font-bold text-md tracking-tighter z-10">making & Full-stack Developer, btw.</h3>
      {/* Plain Text / Description */}
      <p className="text-glass-white/80  mt-3 text-xs w-full z-10 leading-tight">
        Passionate about solving complex problems from the UI to the Server.
        Expert in React/Node.js with a strong foundation in Linux systems and
        network protocols. I don't just write code; I build reliable systems.
      </p>
    </div>
  );
};
