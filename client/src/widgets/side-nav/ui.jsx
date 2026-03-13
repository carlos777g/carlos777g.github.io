import { LeftSideNav } from "./ui/left-side-nav";
// import { RightSideNav } from "./ui/right-side-nav"; 

/**
 * SideNav Widget (Orchestrator)
 * Mounts both left and right fixed navigation bars for 'xl' screens.
 * This acts as the structural root for the entire side navigation feature.
 */
export const SideNavWidget = () => {
  return (
    <>
      <LeftSideNav />
      {/* <RightSideNav /> */}
    </>
  );
};