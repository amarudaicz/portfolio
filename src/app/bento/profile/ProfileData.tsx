import Image from "next/image";
import Skills from "./Skills";

const ProfileData = () => (
  <div className="rounded-2xl p-3 bg-neutral-900 shadow-2xl shadow-neutral-900">
    
    <div className="flex flex-col gap-4">
      <div className="w-full">
        <div className="flex justify-center flex-wrap md:flex-no-wrap items-center gap-3">

          <div className="h-full relative rounded-3xl shadow-inner shadow-neutral-900  bg-indigo-500">
            {/* <div className="w-[100px] h-[100px] shadow-inner rounded-3xl  bg-yellow-400 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" /> */}
            {/* <div className="w-[80px] h-[100px] rounded-full bg-violet-500 absolute z-[1]  left-1/2 -top-[5px] -translate-x-1/2  " />  */}

            <Image
              priority
              width={100}
              height={100}
              alt="profile-image"
              src={"/profile.png"}
              className="z-[1] rounded-3xl  relative "
            ></Image>
          </div> 

          <div className="flex-1 flex flex-col  md:items-start">

            <div className="w-full flex items-center justify-between gap-2">
            
              <div className="flex gap-2 items-center">
                <h1 className="text-xl font-bold text-nowrap">Amaru Daicz</h1>
                <i className="icon-[twemoji--flag-argentina] text-lg"></i>
              </div>

              <div className="flex items-center gap-2">
                <a href="cv.pdf" target="_blank" download className="p-3 flex items-center justify-center rounded-md border border-neutral-500 hover:bg-gradient-to-br hover:from-transparent hover:to-neutral-600 transition-all duration-1000">
                  
                  <i className="icon-[ion--download] text-xl"></i>
                </a>
              </div>
            </div>


            <h2 className="pr-4 text-balance text-opacity-50">
              Desarrollador de{" "}
              <span className="text-violet-500 font-bold text-nowrap ">
                Software
              </span>
              , Web, Mobile.  <br /> Full stack en{" "}
              <span className="text-yellow-400 font-bold text-nowrap">
                Javascript.
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="">
        <Skills />
      </div>

    </div>
  </div>
);

export default ProfileData;
