import {
  DailyInventoryDiv,
  DailyInventoryListDiv,
  DailyInventoryTitle,
} from "../../../styledComponents";
import DailyInventoryUnit from "../../atomics/home/DailyInventoryUnit";

const DailyInventory = () => {
  const date = new Date();
  return (
    <>
      <DailyInventoryDiv>
        <DailyInventoryTitle>{`${date.getMonth() + 1}월 ${date.getDate()}일`}</DailyInventoryTitle>
      </DailyInventoryDiv>
    </>
  );
};

export default DailyInventory;
