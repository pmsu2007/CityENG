import {
  NavigationListDiv,
  NavigationItemDiv,
} from "../../../styledComponents";
import NavigationBtn from "../../atomics/common/NavigationBtn";

const Navigation = () => {
  return (
    <>
      <NavigationListDiv>
        <NavigationBtn text="홈" />
        <NavigationBtn text="제품" />
        <NavigationBtn text="입고" />
        <NavigationBtn text="설정" />
      </NavigationListDiv>
    </>
  );
};

export default Navigation;
