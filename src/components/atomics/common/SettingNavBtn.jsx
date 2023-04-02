import { getCookie } from "../../../config/cookie";
import { SettingNavBtnDiv } from "../../../styledComponents";
import { useNavigate } from "react-router-dom";

const SettingNavBtn = ({ content, filter, id }) => {
  const navigate = useNavigate();
  const onClick = () => {
    if (getCookie("system")) {
      navigate(`/team/${id}/setting/${filter}`);
    } else {
      alert("관리자에게 문의하세요.")
    }
  };
  return (
    <>
      <SettingNavBtnDiv onClick={onClick}>{content}</SettingNavBtnDiv>
    </>
  );
};

export default SettingNavBtn;
