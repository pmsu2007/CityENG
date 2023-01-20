import { EntryLogoImg, EntryDiv } from "../styledComponents";
import Login from "../components/templates/Login";
import { useLocation } from "react-router-dom";

const ShowEntry = () => {
  const location = useLocation();
  
  return (
    <>
      <EntryDiv>
        <EntryLogoImg src="\images\logo.png" />
      </EntryDiv>

      <Login />
    </>
  );
};

export default ShowEntry;
