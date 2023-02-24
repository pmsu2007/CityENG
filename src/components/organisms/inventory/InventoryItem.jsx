import {
  InventoryItemDiv,
  InventoryItemImg,
  InventoryItemInfoDiv,
  InventoryItemInfoInnerDiv,
  InventoryItemQuantityDiv,
} from "../../../styledComponents";

const InventoryItem = ({ name, img, barcode, places}) => {

    
const quantity = places.map(place => place.quantity).reduce((prev, curr) => prev + curr, 0);
  return (
    <>
      <InventoryItemDiv>
        <InventoryItemImg img={img} />
        <InventoryItemInfoDiv>
          <InventoryItemInfoInnerDiv>
            <div>{name}</div>
            <div>{barcode}</div>
          </InventoryItemInfoInnerDiv>
          <InventoryItemQuantityDiv>{quantity}</InventoryItemQuantityDiv>
        </InventoryItemInfoDiv>
      </InventoryItemDiv>
    </>
  );
};

export default InventoryItem;
