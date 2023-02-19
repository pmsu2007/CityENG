import { Outlet, useLocation } from "react-router-dom";
import { MainPageDiv } from "../styledComponents";
import ShowEntry from "./ShowEntry";

const MainPage = () => {
  const location = useLocation();

  return (
    <>
      <MainPageDiv>
        {location.pathname === "/" ? (
          <ShowEntry />
        ) : (
          <>
            <Outlet />
          </>
        )}
      </MainPageDiv>
    </>
  );
};

export default MainPage;
