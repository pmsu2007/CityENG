import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import {
  HomeMenuIcon,
  HomeMenuItemDiv,
  HomeMenuText,
} from "../../../styledComponents";

const HomeMenuBtn = ({ icon, text, filter }) => {
  const param = useParams();
  const id = param.team_id;
  const navigate = useNavigate();
  const goUpload = () => {
    navigate(`/upload/${id}/${filter}`);
  };

  return (
    <>
      <HomeMenuItemDiv onClick={goUpload}>
        <HomeMenuIcon type={filter}>
          <FontAwesomeIcon icon={icon} />
        </HomeMenuIcon>
        <HomeMenuText>{text}</HomeMenuText>
      </HomeMenuItemDiv>
    </>
  );
};

export default HomeMenuBtn;
