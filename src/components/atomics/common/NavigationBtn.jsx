import { NavigationBtnDiv } from "../../../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const NavigationBtn = ({ icon, filter, id }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/team/${id}/${filter}`)
  }
  return (
    <>
      <NavigationBtnDiv onClick={onClick}>
          <FontAwesomeIcon icon={icon} size="lg" />
      </NavigationBtnDiv>
    </>
  );
};

export default NavigationBtn;
