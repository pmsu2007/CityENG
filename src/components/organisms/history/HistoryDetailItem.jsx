import useProductDetail from "../../../hooks/useProductDetail";
import {
  HistoryDetailItemDiv,
  InventoryItemInfoDiv,
  InventoryItemInfoInnerDiv,
  InventoryItemQuantityDiv,
} from "../../../styledComponents";

const HistoryDetailItem = ({ id, fromQuantity, toQuantity, type }) => {
  const product = useProductDetail(id);
  const convertQuantity = (to, from) => {
    let quantity = 0;
    if(type === "IN") {
      quantity = from + to;
    } else if (type === "OUT") {
      quantity = from - to;
    } else if (type === "ADJUST" || type === "MOVE") {
      quantity = to;
    } 
    
    return quantity
  }
  return (
    <>
      <HistoryDetailItemDiv>
        <InventoryItemInfoDiv>
          <InventoryItemInfoInnerDiv>
            <div>{product && product.name}</div>
            <div style={{ fontSize: "12px", color: "#aaa" }}>
              {product &&
                `${product.attributes.map((attribute) => attribute.value)}`}
            </div>
            <InventoryItemQuantityDiv>{`${fromQuantity} → ${convertQuantity(toQuantity, fromQuantity)}`}</InventoryItemQuantityDiv>
          </InventoryItemInfoInnerDiv>
        </InventoryItemInfoDiv>
      </HistoryDetailItemDiv>
    </>
  );
};

export default HistoryDetailItem;
