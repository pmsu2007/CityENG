import { useNavigate } from "react-router-dom";
import { pendingType } from "../../../data";
import {
  HistoryItemCircle,
  HistoryItemContentDiv,
  HistoryItemDiv,
  HistoryItemHeaderDiv,
  HistoryItemMemoDiv,
} from "../../../styledComponents";
const HistoryItem = ({ id, type, memo, createdAt, products }) => {
  const date = new Date(createdAt);
  const convertNumber = ( quantity) => {
    if (type === "IN" || type === "ADJUST") {
      return quantity;
    } else if (type === "OUT") {
      return `-${quantity}`;
    }
  };
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`${id}`)
  }
  return (
    <>
      <HistoryItemDiv onClick={goDetail}>
        <HistoryItemHeaderDiv>
          <HistoryItemCircle type={type} />
          <div style={{ fontSize: "20px", marginLeft: "-90px" }}>
            {pendingType.filter((item) => item.type === type)[0].name}
          </div>
          <div style={{ fontSize: "14px" }}>{`${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()}`}</div>
        </HistoryItemHeaderDiv>
        <HistoryItemContentDiv>
          <div>{`${products.length} 품목 `}</div>
          {type && type === "MOVE" ? (null) : (<div>
            {` / ${convertNumber(products[0].quantity)}개`}
          </div>)}
        </HistoryItemContentDiv>
        <HistoryItemMemoDiv>{memo}</HistoryItemMemoDiv>
      </HistoryItemDiv>
    </>
  );
};

export default HistoryItem;
