import { FastScrollNav } from "./fast-scroll-nav";
import { ScrollIndicator } from "./scroll-indicator";

/**
 * LeftSideNav Widget
 * Fixed left navigation exclusively for xl screens.
 */
export const LeftSideNav = () => {
  return (
    <aside className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-8 z-50">
      <FastScrollNav />
      <ScrollIndicator />
    </aside>
  );
};