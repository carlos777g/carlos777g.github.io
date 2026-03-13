import { PhraseItem } from "./ui/phrase-item";
import { RandomIconBackground } from "@/shared/ui/random-icon-background";

const WORK_PHRASES = [
  "Clean Code Advocate",
  "Robust Backends",
  "Building Confidence",
  "Scalable Products",
];

export const ScrollPhrases = () => {
  return (
    <section className="pt-[10vh] relative w-full flex flex-col items-center overflow-hidden">
      <RandomIconBackground count={8}/>
      <div className="flex flex-col w-full max-w-xl px-5">
        {WORK_PHRASES.map((phrase, index) => (
          <div
            key={index}
            className="min-h-[5vh] flex items-center justify-center"
          >
            <PhraseItem text={phrase} />
          </div>
        ))}
      </div>
    </section>
  );
};
