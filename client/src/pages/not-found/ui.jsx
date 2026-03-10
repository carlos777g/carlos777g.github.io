import { NotFoundContent } from "./ui/not-found-content";

/**
 * NotFound Page Assembler
 * Orchestrates the full layout for the 404 state.
 */
export const NotFoundPage = () => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-body">
      <NotFoundContent />
    </main>
  );
};