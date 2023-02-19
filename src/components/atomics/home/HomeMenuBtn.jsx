import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  HomeMenuIcon,
  HomeMenuItemDiv,
  HomeMenuText,
} from "../../../styledComponents";

const HomeMenuBtn = ({ icon, text, filter }) => {
  
  const navigate = useNavigate();
  const goUpload = () => {
    navigate(`/upload/${filter}`)
  }


  return (
    <>
      <HomeMenuItemDiv onClick={goUpload}>
        <HomeMenuIcon>
          <FontAwesomeIcon icon={icon} />
        </HomeMenuIcon>
        <HomeMenuText>{text}</HomeMenuText>
      </HomeMenuItemDiv>
    </>
  );
};

export default HomeMenuBtn;
