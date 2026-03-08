import { ScrollReveal } from "@/shared/ui/scroll-reveal";
/**
 * EducationSection Component
 * Reusable layout for degree titles.
 */

export const EducationSection = ({ title, school, items }) => (
  <div className=" text-left max-w-2xl mx-auto">
    <ScrollReveal direction="left" duration="500">
      <h3 className="text-accent font-bold text-xl tracking-tighter">
        {title}
      </h3>
    </ScrollReveal>
    <ScrollReveal direction="left" duration="500">
      <h4 className="mb-4 font-bold">{school}</h4>
    </ScrollReveal>
    <ul className="space-y-1 ">
      {items.map((item, index) => (
        <ScrollReveal direction="left" duration="500">
          <li
            key={index}
            className="flex items-start gap-3 text-glass-white/90"
          >
            <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <p className="text-xs leading-relaxed">{item}</p>
          </li>
        </ScrollReveal>
      ))}
    </ul>
  </div>
);
