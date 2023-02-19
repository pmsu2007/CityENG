import { EntryLogoImg, EntryDiv } from "../styledComponents";
import Login from "../components/templates/Login";
const ShowEntry = () => {
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
