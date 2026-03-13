/**
 * NavIcon Component
 * Represents a single navigation node with a tooltip.
 */
export const NavIcon = ({ href, Icon, label }) => {
  return (
    <a
      href={href}
      aria-label={label}
      // 'group' enables targeting child elements on hover
      className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-glass-white/20 bg-body/50 backdrop-blur-sm hover:border-accent transition-all duration-300"
    >
      {/* Icon inherits color changes from the parent group */}
      <Icon className="w-5 h-5 text-glass-white group-hover:text-accent transition-colors duration-300" />

      {/* Tooltip: Hidden by default, slides in and fades in on hover */}
      <span className="absolute left-16 px-3 py-1 rounded-md bg-body border border-accent/20 text-accent text-xs font-bold whitespace-nowrap opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        {label}
      </span>
    </a>
  );
};