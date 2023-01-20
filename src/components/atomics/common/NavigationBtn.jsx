import { NavigationBtnDiv } from "../../../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const NavigationBtn = ({ icon, onClick }) => {
  return (
    <>
      <NavigationBtnDiv>
        <FontAwesomeIcon icon={icon} size="lg"/>
      </NavigationBtnDiv>
    </>
  );
};

export default NavigationBtn;
