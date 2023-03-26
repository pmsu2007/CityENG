import { HeaderDiv, HeaderTitle, HeaderButton } from "../../../styledComponents";

const Header = ({text, type}) => {
  return (
    <>
      <HeaderDiv type={type}>
        <HeaderTitle>{text}</HeaderTitle>
      </HeaderDiv>
    </>
  );
};

export default Header;
