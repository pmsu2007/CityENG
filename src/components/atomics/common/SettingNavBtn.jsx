import { SettingNavBtnDiv } from "../../../styledComponents";
import { useNavigate } from "react-router-dom";

const SettingNavBtn = ({ content, filter, id }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/team/${id}/setting/${filter}`);
  };
  return (
    <>
      <SettingNavBtnDiv onClick={onClick}>{content}</SettingNavBtnDiv>
    </>
  );
};

export default SettingNavBtn;
