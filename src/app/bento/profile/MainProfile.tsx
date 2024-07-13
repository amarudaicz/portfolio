import LayoutBoxCounters from "./LayoutBoxCounters";
import ProfileData from "./ProfileData";

const MainProfile = () => {
 

  return (
    <div className="">
      <div className="flex flex-col gap-3">
          <ProfileData/>
          <LayoutBoxCounters></LayoutBoxCounters>
      </div>
    </div> 
  );
};

export default MainProfile;
