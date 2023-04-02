import { useParams } from "react-router-dom";
import DailyInventory from "../organisms/home/DailyInventory";
import HomeMenu from "../organisms/home/HomeMenu";
import PlaceMenu from "../organisms/home/PlaceMenu";
import useUserDetail from "../../hooks/useUserDetail";

const Home = () => {
  const param = useParams();
  const user = useUserDetail();
  return (
    <>
      <DailyInventory system={user && user.system} name={user && user.name}/>
      <PlaceMenu id={param.team_id}/>
      <HomeMenu />
    </>
  );
};

export default Home;
