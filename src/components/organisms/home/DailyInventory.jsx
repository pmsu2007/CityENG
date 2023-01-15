import {
  DailyInventoryDiv,
  DailyInventoryListDiv,
  DailyInventoryTitle,
} from "../../../styledComponents";
import DailyInventoryUnit from "../../atomics/home/DailyInventoryUnit";

const DailyInventory = () => {
  return (
    <>
      <DailyInventoryDiv>
        <DailyInventoryTitle>1월 11일</DailyInventoryTitle>
        <DailyInventoryListDiv>
          <DailyInventoryUnit text="총 재고 수" count={13} />
          <DailyInventoryUnit text="입고" count={0} />
          <DailyInventoryUnit text="출고" count={0} />
        </DailyInventoryListDiv>
      </DailyInventoryDiv>
    </>
  );
};

export default DailyInventory;
