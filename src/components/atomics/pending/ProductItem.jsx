import {
  InventoryItemDiv,
  InventoryItemImg,
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
          setToggle(!e)
        }}
      >
        <InventoryItemImg img={img} />
        <InventoryItemInfoDiv>
            <div>{name}</div>
          <InventoryItemQuantityDiv>{quantity}</InventoryItemQuantityDiv>
        </InventoryItemInfoDiv>
      </InventoryItemDiv>
    </>
  );
};

export default ProductItem;
