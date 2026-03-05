export const ProfileFrame = ({ image }) => (
  <>
    <div className="left-2 absolute inset-0 border-3 border-glass-white rounded-2xl rotate-11 z-10" />
    <div className="left-2 absolute inset-0 border-3 border-glass-white rounded-2xl overflow-hidden rotate-6 z-10">
      <img
        src={image}
        width={192}
        height={148}
        loading="eager"
        alt="Carlos Guillen Profile"
        className="w-full h-full object-cover p-1"
      />
    </div>
  </>
);
