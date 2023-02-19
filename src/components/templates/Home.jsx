import { useParams } from "react-router-dom";
import DailyInventory from "../organisms/home/DailyInventory";
import HomeMenu from "../organisms/home/HomeMenu";
import PlaceMenu from "../organisms/home/PlaceMenu";

const Home = () => {

  const param = useParams();
  return (
    <>
      <DailyInventory />
      <PlaceMenu id={param.team_id}/>
      <HomeMenu />
    </>
  );
};

export default Home;
