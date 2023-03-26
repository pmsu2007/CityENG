import SettingNavBtn from "../../atomics/common/SettingNavBtn";
import { useParams } from "react-router-dom";
import { SettingListDiv } from "../../../styledComponents";

const SettingNav = () => {
  const param = useParams();
  const id = param.team_id;
  return (
    <>
      <SettingListDiv>
        <SettingNavBtn content={"멤버 설정 ▶"} filter="role" id={id} />
        <SettingNavBtn content={"멤버 초대 ▶"} filter="invite" id={id} />
      </SettingListDiv>
    </>
  );
};

export default SettingNav;
