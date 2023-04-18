import { useNavigate, useParams } from "react-router-dom";
import {
  InventoryItemDiv,
  InventoryItemImg,
  InventoryItemInfoDiv,
  InventoryItemInfoInnerDiv,
  InventoryItemQuantityDiv,
} from "../../../styledComponents";

const InventoryItem = ({ id, name, img, places }) => {
  const quantity = places
    .map((place) => place.quantity)
    .reduce((prev, curr) => prev + curr, 0);
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`${id}`);
  }
  return (
    <>
      <InventoryItemDiv onClick={goDetail}>
        <InventoryItemImg img={img} />
        <InventoryItemInfoDiv>
          <InventoryItemInfoInnerDiv>
            <div>{name}</div>
          </InventoryItemInfoInnerDiv>
          <InventoryItemQuantityDiv>{quantity}</InventoryItemQuantityDiv>
        </InventoryItemInfoDiv>
      </InventoryItemDiv>
    </>
  );
};

export default InventoryItem;
