import { ScrollReveal } from "@/shared/ui/scroll-reveal";

export const PhraseItem = ({ text }) => {
  return (
    <div className="relative py-15 min-h-40 flex items-center justify-center px-4"> 
      <div className="relative z-10 w-full max-w-5xl"> 
        <ScrollReveal>
          <span className="block text-4xl md:text-6xl font-black text-center tracking-tighter leading-tight">
            {text}
          </span>
        </ScrollReveal>
      </div>
    </div>
  );
};
