import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HomeMenuIcon,
  HomeMenuItemDiv,
  HomeMenuText,
} from "../../../styledComponents";

const HomeMenuBtn = ({ icon, text }) => {
  return (
    <>
      <HomeMenuItemDiv>
        <HomeMenuIcon>
          <FontAwesomeIcon icon={icon} />
        </HomeMenuIcon>
        <HomeMenuText>{text}</HomeMenuText>
      </HomeMenuItemDiv>
    </>
  );
};

export default HomeMenuBtn;
