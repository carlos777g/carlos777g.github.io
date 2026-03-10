import { ScrollReveal } from "@/shared/ui/scroll-reveal";

export const PhraseItem = ({ text }) => {
  return (
    <div className="py-15 min-h-40 flex items-center justify-center">
      <ScrollReveal>
        <h4 className="text-4xl md:text-6xl font-black text-center tracking-tighter">
          {text}
        </h4>
      </ScrollReveal>
    </div>
  );
};
