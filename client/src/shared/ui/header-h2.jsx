import { AnimatedUnderline } from "./animated-underline";

export const HeaderH2 = ({ text, actionSlot }) => {
  return (
    <div className="flex justify-center items-end gap-4 mb-7 w-full">
      <div className="relative">
        <h2 className="text-4xl md:text-7xl font-itim tracking-tighter">
          {text}
        </h2>
        <AnimatedUnderline />
      </div>
      {actionSlot && (
        <div className="flex items-center shrink-0 mb-2 md:mb-4">
          {actionSlot}
        </div>
      )}
    </div>
  );
};
