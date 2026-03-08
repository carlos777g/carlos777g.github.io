export const ProfileFrame = ({ image }) => (
  <>
    {/* frames: */}
    <div className="left-2 absolute inset-0 border-3 border-glass-white rounded-2xl rotate-11 z-10" />
    <div className="left-2 absolute inset-0 border-3 border-glass-white rounded-2xl overflow-hidden rotate-6 z-10 bg-dark-gray">
      {/* icon imagen: */}
      <img
        src={image}
        width={747}
        height={1024}
        loading="eager"
        fetchpriority="high"
        alt="Carlos Guillen Profile"
        className="absolute inset-0 w-full h-full object-cover p-1"
      />
    </div>
  </>
);
