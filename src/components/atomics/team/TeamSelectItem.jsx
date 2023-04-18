import { useNavigate } from "react-router-dom";
import {
  TeamSelectItemDiv,
} from "../../../styledComponents";

const TeamSelectItem = ({ team }) => {
  const navigate = useNavigate();
  const onTeamClick = () => {
    navigate(`/team/${team.id}/home`);
  };
  return (
    <>
      <TeamSelectItemDiv onClick={onTeamClick}>
          <div style={{marginLeft: "15px", fontSize: "20px"}}>{team.name}</div>
      </TeamSelectItemDiv>
    </>
  );
};

export default TeamSelectItem;
