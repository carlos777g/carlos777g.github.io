export const ProfileFrame = ({ image }) => (
  <>
    {/* frames: */}
    <div className=" absolute inset-0 border-3 border-glass-white rounded-2xl rotate-11 z-10" />
    <div className=" absolute inset-0 border-3 border-glass-white rounded-2xl overflow-hidden rotate-6 z-10 bg-dark-gray">
      {/* icon imagen: */}
      <img
        src={image}
        width={747}
        height={1024}
        loading="eager"
        fetchPriority="high"
        alt="Illustrated avatar of Carlos Guillén, Full-stack Developer & Telematics Engineer"
        className="absolute inset-0 w-full h-full object-cover p-1"
      />
    </div>
  </>
);
