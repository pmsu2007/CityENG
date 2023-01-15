import {
  DailyInventoryItemDiv,
  DailyInventoryItemTitle,
  DailyInventoryItemCount,
} from "../../../styledComponents";

const DailyInventoryUnit = ({ text, count }) => {
  return (
    <>
      <DailyInventoryItemDiv>
        <DailyInventoryItemCount>{count}</DailyInventoryItemCount>
        <DailyInventoryItemTitle>{text}</DailyInventoryItemTitle>
      </DailyInventoryItemDiv>
    </>
  );
};

export default DailyInventoryUnit;
