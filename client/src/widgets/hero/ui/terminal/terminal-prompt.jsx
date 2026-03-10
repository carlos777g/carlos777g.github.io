/**
 * TerminalPrompt Component
 * Renders the static user and directory prefix.
 */
export const TerminalPrompt = () => {
  return (
    <span className="mr-2 select-none">
      <span className="text-accent">carworks@linux</span>
      <span className="text-glass-white">:</span>
      {/* Arbitrary specific color for the slash */}
      <span className="text-[#457FEC]">/</span>
      <span className="text-glass-white">$</span>
    </span>
  );
};