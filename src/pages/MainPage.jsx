import Navigation from "../components/organisms/common/Navigation";
import { Outlet, useLocation } from "react-router-dom";
import { MainPageDiv, MainPageInnerDiv } from "../styledComponents";
import ShowEntry from "./ShowEntry";
import Header from "../components/organisms/common/Header";

const MainPage = () => {
  const location = useLocation();

  return (
    <>
      <MainPageDiv>
        {location.pathname === "/" ? (
          <ShowEntry />
        ) : (
          <>
            <Header />
            <MainPageInnerDiv>
              <Outlet />
              <Navigation />
            </MainPageInnerDiv>
          </>
        )}
      </MainPageDiv>
    </>
  );
};

export default MainPage;
