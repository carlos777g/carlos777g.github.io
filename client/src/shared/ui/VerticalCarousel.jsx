import { Icon } from "@/shared/ui/icon";
import { AnimatedUnderline } from "./animated-underline";

export const VerticalCarousel = ({ title, items }) => {
  const animationDuration = items.length * 4;

  return (
    <div className="flex flex-col h-100 overflow-hidden relative">
      {/* Contenedor Animado */}
      <div
        className="animate-scroll-y flex flex-col gap-6"
        style={{ animationDuration: `${animationDuration}s` }}
      >
        {/* First carousel */}
        <div className="flex flex-col gap-6">
          {items.map((item, index) => (
            <div
              key={`track1-${index}`}
              className="flex flex-col items-center gap-2"
            >
              <Icon
                src={item.src}
                alt={item.alt}
                className="w-10 h-10 transition-transform duration-300 hover:scale-110"
              />
              <span className="px-3 py-1 text-xs font-extralight bg-muted-white/10 text-glass-white rounded-xl">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* First carousel (clon) */}
        <div className="flex flex-col gap-6">
          {items.map((item, index) => (
            <div
              key={`track2-${index}`}
              className="flex flex-col items-center gap-2"
            >
              <Icon
                src={item.src}
                alt={item.alt}
                className="w-10 h-10 transition-transform duration-300 hover:scale-110"
              />
              <span className="px-3 py-1 text-xs font-extralight bg-muted-white/10 text-glass-white rounded-xl">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Absolute lo saca del flujo de las pistas, bottom-0 y left-0 lo pegan a la base, w-full centra el texto */}
     <div className="absolute bottom-0 left-0 w-full bg-body z-20 pt-4 pb-2 text-center">
      <AnimatedUnderline width="w-20"/>
        <h3 className="relative inline-block text-accent font-bold uppercase tracking-widest text-[10px] pt-2">
          {title}
        </h3>
      </div>
    </div>
  );
};
