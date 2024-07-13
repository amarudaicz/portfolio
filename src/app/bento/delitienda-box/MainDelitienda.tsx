import Chip from "@/app/shared/Chip";
import HeaderDelitienda from "./HeaderDelitienda";

const MainDelitienda = () => {
  return (
    <div className="rounded-2xl h-full relative">
      <div className="h-full bg-white rounded-2xl relative  ">
        <div className="h-full w-full flex flex-col justify-between ">

          <HeaderDelitienda></HeaderDelitienda>

          <div className="relative self-end w-3/4">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white via-transparent to-transparent"></div>
            <div className="absolute top-0 left-0 w-1/5 h-full bg-gradient-to-r from-white via-transparent to-transparent"></div>

            <img
              className="rounded-b-2xl "
              alt="delitienda-logo"
              src="/mock-deli.png"
            ></img>
          </div>

          {/* 
        <h5 className="text-xl text-balance font-extrabold text-neutral-800">
        Delitienda, Software de ventas
        </h5> */}
        </div>

        <div className="absolute right-1/2 translate-x-2/3 top-1/2 -translate-y-1/2 blur-3xl rounded-full w-[80%] h-[80%] z-[-2]  bg-[#4751D3]"></div>
      </div>
    </div>
  );
};

export default MainDelitienda;
