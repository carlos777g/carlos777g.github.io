/**
 * ProfileImage Component
 * Prevents layout shift by reserving space with aspect-ratio.
 */
export const ProfileImage = ({ src }) => (
  <div className="relative w-64 lg:w-74 mx-auto mb-7 rounded-2xl overflow-hidden">
    <img
      src={src}
      alt="Imagen of Carlos Guillén, Full-stack Developer & Telematics Engineer"
      width={256}
      height={348}
      className="w-full h-full object-cover border-2 border-glass-white/20"
      loading="lazy"
    />
  </div>
);
