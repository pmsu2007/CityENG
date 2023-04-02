import { useParams } from "react-router-dom";
import useUserList from "../../hooks/useUserList";
import { SettingDiv, SettingListDiv } from "../../styledComponents";
import Header from "../organisms/common/Header";
import UserInviteItem from "../organisms/setting/UserInviteItem";

const SettingInvite = () => {
  const param = useParams();
  const teamId = param.team_id;
  const users = useUserList();

  return (
    <>
      <Header text={"멤버 초대"} />
      <SettingDiv>
        <SettingListDiv>
          {users &&
            users.map((user) => (
              <UserInviteItem
                key={user.id}
                user_id={user.id}
                name={user.name}
                team_id={teamId}
              />
            ))}
        </SettingListDiv>
      </SettingDiv>
    </>
  );
};

export default SettingInvite;
