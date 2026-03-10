import { Link } from "react-router-dom";

/**
 * NotFoundContent Component
 * Contains the visual elements and routing action for the 404 state.
 */
export const NotFoundContent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      {/* Background massive text */}
      <h1 className="text-[120px] md:text-[200px] font-black text-accent opacity-20 select-none leading-none">
        404
      </h1>
      
      {/* Foreground card */}
      <div className="relative -mt-16 md:-mt-24 z-10 border border-glass-white/10 bg-body p-8 md:p-12 rounded-xl max-w-lg w-full shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-glass-white">
          Packet_Lost
        </h2>
        <p className="text-muted-white mb-8 text-sm md:text-base leading-relaxed">
          The requested route was not found in the routing table. 
          Check the address or return to the main network environment.
        </p>

        {/* React Router Link prevents full page reload */}
        <Link 
          to="/" 
          className="inline-block px-8 py-3 bg-accent text-body font-bold rounded-md hover:scale-105 transition-transform active:scale-95"
        >
          RETURN_TO_HOME
        </Link>
      </div>
    </div>
  );
};