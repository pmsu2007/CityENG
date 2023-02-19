import { HeaderDiv, HeaderTitle, HeaderButton } from "../../../styledComponents";

const Header = ({text}) => {
  return (
    <>
      <HeaderDiv>
        <HeaderTitle>{text}</HeaderTitle>
      </HeaderDiv>
    </>
  );
};

export default Header;
