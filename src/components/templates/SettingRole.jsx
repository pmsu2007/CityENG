import Header from "../organisms/common/Header";
import {
  SettingDiv,
  SettingListDiv,
  HeaderButton,
} from "../../styledComponents";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRoleList from "../../hooks/useRoleList";
import RoleItem from "../organisms/setting/RoleItem";
import UserRoleItem from "../organisms/setting/UserRoleItem";
import useUserList from "../../hooks/useUserList";
import useTeamUserList from "../../hooks/useTeamUserList";

const SettingRole = () => {
  const param = useParams();
  const teamId = param.team_id;

  const roles = useRoleList(teamId);
  const users = useUserList();
  const teamUsers = useTeamUserList(teamId);
console.log(users);
console.log(teamUsers);

  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Header text="권한 설정" />
      <HeaderButton
        onClick={() => {
          setToggle((e) => !e);
        }}
      >
        역할
      </HeaderButton>
      <SettingDiv>
        <SettingListDiv>
          {toggle ? (
            <>
              {roles &&
                roles.map((role) => (
                  <RoleItem
                    key={role.id}
                    name={role.name}
                    permissions={role.permissions}
                  />
                ))}
            </>
          ) : (
            <>
              {users &&
                users
                  .filter((item) =>
                    teamUsers.filter(
                      (teamUser) => teamUser.userId === item.id
                    ).length > 0
                  )
                  .map((user) => (
                    <UserRoleItem
                      key={user.id}
                      user_id={user.id}
                      name={user.name}
                      team_id={teamId}
                    />
                  ))}
            </>
          )}
        </SettingListDiv>
      </SettingDiv>
    </>
  );
};

export default SettingRole;
