import {
  InventoryItemDiv,
  InventoryItemImg,
  InventoryItemInfoDiv,
  InventoryItemInfoInnerDiv,
  InventoryItemQuantityDiv,
} from "../../../styledComponents";

const ProductItem = ({ id, name, img, barcode, places, getResult, setToggle }) => {
  const quantity = places
    .map((place) => place.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <>
      <InventoryItemDiv
        onClick={(e) => {
          getResult(id);
          setToggle(!e)
        }}
      >
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

export default ProductItem;
