import { NavigationBtnDiv } from "../../../styledComponents";

const NavigationBtn = ({ text, onClick }) => {
  return (
    <>
      <NavigationBtnDiv>{text}</NavigationBtnDiv>
    </>
  );
};

export default NavigationBtn;
