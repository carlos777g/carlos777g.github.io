/**
 * HeroDescription Component
 * Contains the professional role and a short bio. Left-aligned natively.
 */
export const HeroDescription = () => {
  return (
    <div className="flex flex-col gap-2 w-full text-right sm:text-center lg:text-left">
      
      {/* Role / Accent Text */}
      <h3 className="text-accent font-bold text-xl sm:text-2xl lg:text-xl xl:text-3xl tracking-tighter leading-tight">
        Telematics Engineer in the making & Full-stack Developer, btw.
      </h3>
      
      {/* Plain Text / Description */}
      <p className="text-glass-white/80 mt-2 text-sm sm:text-base lg:text-md xl:text-lg leading-relaxed ">
        Passionate about solving complex problems from the UI to the Server.
        Expert in React/Node.js with a strong foundation in Linux systems and
        network protocols. I don't just write code; I build reliable systems.
      </p>

    </div>
  );
};