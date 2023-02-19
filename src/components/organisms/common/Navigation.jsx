import { NavigationListDiv } from "../../../styledComponents";
import NavigationBtn from "../../atomics/common/NavigationBtn";
import {
  faArrowRightArrowLeft,
  faBox,
  faGear,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const Navigation = () => {
  const param = useParams();
  const id = param.team_id;
  return (
    <>
      <NavigationListDiv>
        <NavigationBtn icon={faHouse} filter="home" id={id} />
        <NavigationBtn icon={faBox} filter="inventory" id={id} />
        <NavigationBtn icon={faArrowRightArrowLeft} filter="history" id={id} />
        <NavigationBtn icon={faGear} filter="setting" id={id} />
      </NavigationListDiv>
    </>
  );
};

export default Navigation;
