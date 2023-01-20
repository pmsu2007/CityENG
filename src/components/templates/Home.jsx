import DailyInventory from "../organisms/home/DailyInventory";
import HomeMenu from "../organisms/home/HomeMenu";
import InventorySearch from "../organisms/home/InventorySearch";

const Home = () => {
  return (
    <>
      <DailyInventory />
      <InventorySearch />
      <HomeMenu />
    </>
  );
};

export default Home;
