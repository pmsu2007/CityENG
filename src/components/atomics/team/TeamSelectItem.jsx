import { useNavigate } from "react-router-dom";
import {
  TeamSelectImgDiv,
  TeamSelectItemDiv,
  TeamSelectNameDiv,
} from "../../../styledComponents";

const TeamSelectItem = ({team}) => {

    const navigate = useNavigate();
    const onTeamClick = () => {
        navigate(`/team/${team.id}/home`);
    }
  return (
    <>
      <TeamSelectItemDiv onClick={onTeamClick}>
        <TeamSelectImgDiv img={null} alt={"NULL"} />
        <TeamSelectNameDiv>
          <div>{team.name}</div>
        </TeamSelectNameDiv>
      </TeamSelectItemDiv>
    </>
  );
};

export default TeamSelectItem;
