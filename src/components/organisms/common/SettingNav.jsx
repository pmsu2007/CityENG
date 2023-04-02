import SettingNavBtn from "../../atomics/common/SettingNavBtn";
import { useNavigate, useParams } from "react-router-dom";
import { SettingListDiv, SettingNavBtnDiv } from "../../../styledComponents";

const SettingNav = () => {
  const param = useParams();
  const navigate = useNavigate();
  const id = param.team_id;
  return (
    <>
      <SettingListDiv>
        <SettingNavBtn content={"권한 설정 ▶"} filter="role" id={id} />
        <SettingNavBtn content={"멤버 초대 ▶"} filter="invite" id={id} />
        <SettingNavBtnDiv onClick={() => {
          navigate('/')
        }}>로그 아웃 ▶</SettingNavBtnDiv>
      </SettingListDiv>
    </>
  );
};

export default SettingNav;
