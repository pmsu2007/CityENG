import { NavigationListDiv } from "../../../styledComponents";
import NavigationBtn from "../../atomics/common/NavigationBtn";
import {
  faArrowRightArrowLeft,
  faBox,
  faGear,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
const Navigation = () => {
  return (
    <>
      <NavigationListDiv>
        <NavigationBtn icon={faHouse} />
        <NavigationBtn icon={faBox} />
        <NavigationBtn icon={faArrowRightArrowLeft} />
        <NavigationBtn icon={faGear} />
      </NavigationListDiv>
    </>
  );
};

export default Navigation;
