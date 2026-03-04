import profileImg from "@/shared/assets/icon-me.webp";
import arrowIcon from "@/shared/assets/arrow.svg";
import { Icon } from "@/shared/ui/icon";

export const Hero = () => {
  return (
    // -rotate-[-20deg]
    // relative min-h-screen w-full flex flex-col justify-center px-6 overflow-hidden
    // border-2 border-glass-white
    //   <Icon
    //             src={arrowIcon}
    //             alt="Arrow Decor"
    //             className="w-10 h-10 fill-accent"
    //           />
    /* <img
              src={profileImg}
              alt="Carlos Guillen"
              className="w-full h-full object-cover"
            /> */

    <div className="relative w-64 h-64 mx-auto">
      <div className="absolute inset-0 border-2 border-glass-white rounded-2xl overflow-hidden -rotate-[-5.73deg] z-10 bg-body">
        <img
          src={profileImg}
          alt="Carlos Guillen icon"
          className="w-full h-full object-cover p-1"
        />
      </div>
    </div>
  );
};
