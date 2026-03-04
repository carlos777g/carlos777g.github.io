export const ProfileFrame = ({ image }) => (
  <>
    <div className="absolute inset-0 border-3 border-glass-white rounded-2xl rotate-11 z-10" />
    <div className="absolute inset-0 border-3 border-glass-white rounded-2xl overflow-hidden rotate-6 z-10">
      <img
        src={image}
        alt="Carlos Guillen Profile"
        className="w-48 h-full object-cover p-1"
      />
    </div>
  </>
);