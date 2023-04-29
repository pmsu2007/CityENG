import {
  InvisibleSettingInviteButton,
  SettingInviteButton,
  SettingListInnerDiv,
  SettingUserItemDiv,
} from "../../../styledComponents";
import { APIURL } from "../../../config/key";
import axios from "axios";
import { getCookie } from "../../../config/cookie";
import useTeamUserList from "../../../hooks/useTeamUserList";
import { useEffect, useState } from "react";

const UserInviteItem = ({ user_id, name, team_id }) => {
  const [invite, setInvite] = useState(true);
  const teamUsers = useTeamUserList(team_id);

  const onInviteClick = () => {
    if (window.confirm("초대하시겠습니까?")) {
      sendInviteRequest();
    }
  };

  const sendInviteRequest = async () => {
    const body = {
      userId: user_id,
      teamRoleId: 1, // ADMIN : 1, MEMBER: 2
    }; 

    const res = await axios.post(`${APIURL}/api/teams/${team_id}/user`, body, {
      headers: {
        Authorization: `Bearer ${getCookie("key")}`,
      },
    });
    
    if (res.status === 201) {
      window.location.reload();
    } else {
      console.log("초대 실패");
    }
  };

  useEffect(() => {
    teamUsers &&
      teamUsers.map((teamUser) => {
        if (teamUser.userId === user_id) {
          setInvite(!invite);
        }
      });
  }, [teamUsers]);

  return (
    <>
      <SettingListInnerDiv>
        <SettingUserItemDiv>
          <div>{name}</div>
        </SettingUserItemDiv>
        {invite ? (
          <SettingInviteButton onClick={onInviteClick}>
            초대
          </SettingInviteButton>
        ) : (
          <InvisibleSettingInviteButton></InvisibleSettingInviteButton>
        )}
      </SettingListInnerDiv>
    </>
  );
};

export default UserInviteItem;
