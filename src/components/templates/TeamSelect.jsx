import useTeamList from "../../hooks/useTeamList";
import {
  TeamSelectDiv,
  TeamSelectHeaderDiv,
  TeamSelectListDiv,
  TeamSelectTitleDiv,
} from "../../styledComponents";
import TeamSelectItem from "../atomics/team/TeamSelectItem";
import React from "react";

const TeamSelect = () => {
    const teams = useTeamList();
    return (
    <>
      <TeamSelectDiv>
        <TeamSelectHeaderDiv>
          <TeamSelectTitleDiv>팀 선택</TeamSelectTitleDiv>
        </TeamSelectHeaderDiv>
        <TeamSelectListDiv>
          {teams && teams.map((team) => (<TeamSelectItem key={team.id} team={team} />))}
        </TeamSelectListDiv>
      </TeamSelectDiv>
    </>
  );
};

export default React.memo(TeamSelect);
