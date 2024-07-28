import LayoutBoxCounters from "./LayoutBoxCounters";
import ProfileData from "./ProfileData";

const MainProfile = () => {
 

  return (
    <div className="h-full">
      <div className="flex h-full flex-col gap-3">
          <ProfileData/>
          <LayoutBoxCounters></LayoutBoxCounters>
      </div>
    </div> 
  );
};

export default MainProfile;
