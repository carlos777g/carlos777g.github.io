import { AnimatedUnderline } from "./animated-underline";

export const HeaderH2 = ({ text, actionSlot, leftSlot, align = "left" }) => {
  return (
    <header className={`flex items-end gap-4 mb-8 w-full ${align === "right" ? "justify-end" : "justify-center"}`}>
      
      {leftSlot && (
        <div className="flex items-center shrink-0 mb-2 md:mb-4">
          {leftSlot}
        </div>
      )}

      <div className={`relative ${align === "right" ? "text-right" : "text-left"}`}>
        <h2 className="text-4xl md:text-7xl font-itim tracking-tighter">
          {text}
        </h2>
        <AnimatedUnderline width="w-full" />
      </div>

      {actionSlot && (
        <div className="flex items-center shrink-0 mb-2 md:mb-4">
          {actionSlot}
        </div>
      )}

    </header>
  );
};