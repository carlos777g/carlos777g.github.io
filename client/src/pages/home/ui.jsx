import { TopNavbar } from "@/widgets/top-navbar";
import { BottomNavbar } from "@/widgets/bottom-navbar";
import { Hero } from "@/widgets/hero";
export const HomePage = () => {
  return (
    <div className="relative min-h-[200vh] pt-20 pb-20">
      {/* Dummy height for scroll test */}
      <TopNavbar />
      <main className="px-4">
        <Hero />
        <h2 className="text-accent font-mono">// SYSTEM_READY</h2>
      </main>
      <BottomNavbar />
    </div>
  );
};
