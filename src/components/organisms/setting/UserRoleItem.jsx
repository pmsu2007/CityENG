import {
  SettingInviteButton,
  SettingListInnerDiv,
  SettingUserItemDiv,
} from "../../../styledComponents";
import { APIURL } from "../../../config/key";
import axios from "axios";
import { getCookie } from "../../../config/cookie";
import useRoleList from "../../../hooks/useRoleList";
import RoleSelect from "../../atomics/select/RoleSelect";
import { useState } from "react";

const UserRoleItem = ({ user_id, name, team_id }) => {
  const roles = useRoleList(team_id);
  const [roleId, setRoleId] = useState();
  const onRoleClick = () => {
    if (window.confirm("권한을 부여 하시겠습니까?")) {
      sendRoleRequest();
    }
  };

  const getResult = (obj) => {
    setRoleId(obj);
  };

  const sendRoleRequest = async () => {

    const res = await axios.put(
      `${APIURL}/api/teams/${team_id}/user`,
      {
        userId: user_id,
        teamRoleId: roleId, // ADMIN : 1, MEMBER: 2
      },
      {
        headers: {
          Authorization: `Bearer ${getCookie("key")}`,
        },
      }
    );

    if (res.status === 200) {
      window.location.reload();
    } else {
      console.log("권한 부여 실패");
    }
  };

  return (
    <>
      <SettingListInnerDiv>
        <SettingUserItemDiv>
          <div>{name}</div>
          <RoleSelect options={roles} getResult={getResult} />
        </SettingUserItemDiv>
        <SettingInviteButton onClick={onRoleClick}>확인</SettingInviteButton>
      </SettingListInnerDiv>
    </>
  );
};

export default UserRoleItem;
