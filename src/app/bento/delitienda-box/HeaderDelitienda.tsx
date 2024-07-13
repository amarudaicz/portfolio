import Marquee from "@/app/magic-ui/Marquee";
import Chip from "@/app/shared/Chip";

const HeaderDelitienda = () => {
  return (
      <div className="px-3 pt-2 gap-3  flex justify-between items-center ">

        <img
          className="w-14"
          alt="delitienda-logo"
          height={100}
          src="/logo-deli.png"
        ></img>

        <div className="flex-1 overflow-x-scroll relative after:absolute after:left-0 after:top-0 after:h-full after:w-[10px] after:bg-gradient-to-r after:from-white after:to-transparent before:absolute before:right-0 before:top-0 before:h-full before:w-[10px] before:bg-gradient-to-l before:from-white before:to-transparent">
          
          <div className="flex gap-2 items-center overflow-x-scroll no-scrollbar  ">
            <Marquee></Marquee>
            <Chip
              title="Angular"
              icon="icon-[devicon--angular]"
              className="border-neutral-600 text-neutral-600 text-sm"
            ></Chip>
            <Chip
              title="NodeJS"
              icon="icon-[logos--nodejs-icon]"
              className="border-neutral-600 text-neutral-600 text-sm"
            ></Chip>
            <Chip
              title="Express"
              icon="icon-[skill-icons--expressjs-dark]"
              className="border-neutral-600 text-neutral-600 text-sm"
            ></Chip>
              <Chip
              title="Express"
              icon="icon-[skill-icons--expressjs-dark]"
              className="border-neutral-600 text-neutral-600 text-sm"
            ></Chip>
            
          </div>
        </div>
      </div>
  );
};

export default HeaderDelitienda;
