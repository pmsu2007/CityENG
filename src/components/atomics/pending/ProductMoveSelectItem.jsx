import {
  ProductSelectItemDiv,
  ProductSelectItemInnerDiv,
} from "../../../styledComponents";
import ProductMoveQuantityInput from "../input/ProductMoveQuantityInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ProductMoveSelectItem = ({
  id,
  name,
  quantity,
  onClick,
  getResult,
  toPlace,
  fromPlace,
}) => {
  return (
    <>
      <ProductSelectItemDiv>
        <ProductSelectItemInnerDiv>
          <div>{name}</div>
          <div style={{ color: "#4f67ff" }}>{quantity}</div>{" "}
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => {
              onClick(Number(id));
            }}
          />
        </ProductSelectItemInnerDiv>
        <ProductMoveQuantityInput
          productId={id}
          getResult={getResult}
          quantity={quantity}
          toPlace={toPlace}
          fromPlace={fromPlace}
        />
      </ProductSelectItemDiv>
    </>
  );
};

export default ProductMoveSelectItem;
