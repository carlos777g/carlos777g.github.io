import { ScrollReveal } from "@/shared/ui/scroll-reveal";

/**
 * EducationSection Component
 * Reusable layout for degree titles.
 */
export const EducationSection = ({ title, school, items, Icon }) => (
  <div className="text-left max-w-full">
    <ScrollReveal direction="left" duration="500">
      <div className="flex items-center gap-10">
        <h3 className="text-accent font-bold text-lg tracking-tighter">
          {title}
        </h3>
        {Icon && (
          <Icon className="w-6 h-6 text-accent shrink-0 hidden sm:block" />
        )}
      </div>
    </ScrollReveal>
    <ScrollReveal direction="left" duration="500">
      <h4 className="mb-4 text-sm font-bold">{school}</h4>
    </ScrollReveal>
    <ul className="space-y-1 ">
      {items.map((item, index) => (
        /* CORRECCIÓN: El key va en el wrapper principal */
        <ScrollReveal
          key={`${title}-item-${index}`}
          direction="left"
          duration="500"
        >
          <li className="flex items-start gap-3 text-glass-white/90">
            <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <p className="text-xs leading-relaxed">{item}</p>
          </li>
        </ScrollReveal>
      ))}
    </ul>
  </div>
);
