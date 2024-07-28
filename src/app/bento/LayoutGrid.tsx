import MainProfile from "./profile/MainProfile";
import MainDelitienda from "./delitienda/main-delitienda/MainDelitienda";
import MainGithub from "./git-hub/main-github/MainGithub";
import MainOwShoes from "./ow-shoes/main-ow-shoes/MainOwShoes";
import MainTroca from "./troca/MainTroca";
import MainContact from "./contact/MainContact";

const LayoutGrid = ({ children }: { children?: any }) => {
  return (
    <section className="mx-auto p-5 ">
      <div className="">
        <div className="w-full h-full flex flex-col gap-3 md:grid md:grid-cols-5 md:grid-rows-5 md:gap-3">

          <div className="col-span-3 row-span-2 lg:col-span-2  ">
            <MainProfile></MainProfile>
          </div>

          <div className="col-span-2 row-span-2 lg:row-span-3 lg:col-span-2 ">
            <MainDelitienda></MainDelitienda>
          </div>

          <div className="col-span-2 row-span-3 lg:col-span-1 lg:row-span-3">
            <MainGithub></MainGithub>
          </div>

          <div className="col-span-3 row-span-1 lg:col-span-2">
              <MainOwShoes></MainOwShoes>
          </div>

          <div className="col-span-3 row-span-2">
            <MainTroca></MainTroca>
          </div>

          <div className="col-span-5 row-span-2 lg:col-span-2">
            <MainContact>

            </MainContact>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default LayoutGrid;
