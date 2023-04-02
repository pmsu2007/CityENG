import { setCookie } from "../../../config/cookie";
import {
  DailyInventoryDiv,
  DailyInventoryTitle,
} from "../../../styledComponents";

const DailyInventory = ({ system, name }) => {
  const date = new Date();
  setCookie("system", system);
  return (
    <>
      <DailyInventoryDiv>
        <DailyInventoryTitle>{`${
          date.getMonth() + 1
        }월 ${date.getDate()}일`}</DailyInventoryTitle>
        <div>{name} 님 어서오세요 !</div>
      </DailyInventoryDiv>
    </>
  );
};

export default DailyInventory;
