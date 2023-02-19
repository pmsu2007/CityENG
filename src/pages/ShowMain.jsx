import { Outlet } from "react-router-dom";
import Navigation from "../components/organisms/common/Navigation";
import { MainPageInnerDiv } from "../styledComponents";
const ShowMain = () => {
  return (
    <>
      <MainPageInnerDiv>
        <Outlet />
        <Navigation />
      </MainPageInnerDiv>
    </>
  );
};

export default ShowMain;
