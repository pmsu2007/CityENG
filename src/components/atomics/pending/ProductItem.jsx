import {
  InventoryItemDiv,
  InventoryItemInfoDiv,
  InventoryItemQuantityDiv,
} from "../../../styledComponents";

const ProductItem = ({ id, name, img, places, getResult, setToggle }) => {
  const quantity = places
    .map((place) => place.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <>
      <InventoryItemDiv
        onClick={(e) => {
          getResult(id);
          setToggle(!e);
        }}
      >
        <InventoryItemInfoDiv>
          <div>{name}</div>
        </InventoryItemInfoDiv>
        <InventoryItemQuantityDiv>{quantity}</InventoryItemQuantityDiv>
      </InventoryItemDiv>
    </>
  );
};

export default ProductItem;
