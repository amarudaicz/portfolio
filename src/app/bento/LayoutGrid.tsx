import { Children, ReactElement } from "react";
import MainProfile from "./profile/MainProfile";
import MainDelitienda from "./delitienda-box/MainDelitienda";

const LayoutGrid = ({ children }: { children?: any }) => {
  return (
    <section className="container mx-auto p-5">
      <div className=" w-full h-full">

        <div className="w-full h-full flex flex-col gap-3 md:grid md:grid-cols-5 md:grid-rows-4 md:gap-3">

          <div className="md:col-span-3 md:row-span-2 lg:col-span-2 ">
            <MainProfile></MainProfile>
          </div>


          <div className="md:col-span-2 md:row-span-2">
            <MainDelitienda></MainDelitienda>
          </div>

          <div className="md:col-span-1 md:row-span-2 bg-neutral-900 rounded-2xl  ">
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default LayoutGrid;
