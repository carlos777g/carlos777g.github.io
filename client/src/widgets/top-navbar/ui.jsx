import { useScrollDirection } from '@/shared/lib/hooks/use-scroll-direction';
import { ThemeButton } from '@/features/theme-switch';

export const TopNavbar = () => {
  const scrollDir = useScrollDirection();
  
  return (
    <nav className={`fixed top-0 left-0 w-full h-16 z-50 transition-transform duration-300 flex items-center justify-between px-6 backdrop-blur-md bg-body/70 border-b border-accent/10 
      ${scrollDir === "down" ? "-translate-y-full" : "translate-y-0"}`}>
      
      <div className="text-xl font-bold tracking-tighter">
        <span className="text-slate-50">carworks</span>
        <span className="text-accent">.dev</span>
      </div>

      <ThemeButton />
    </nav>
  );
};