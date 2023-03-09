import { ProductSelectItemDiv } from "../../../styledComponents";
import ProductQuantityInput from "../input/ProductQuantityInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ProductSelectItem = ({
  id,
  name,
  quantity,
  onClick,
  getResult,
  place,
}) => {
  return (
    <>
      <ProductSelectItemDiv>
        <div>{name}</div>
        <div style={{ color: "#4f67ff" }}>{quantity}</div>
        <ProductQuantityInput
          productId={id}
          getResult={getResult}
          quantity={quantity}
          placeId={place}
        />
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => {
            onClick(Number(id));
          }}
        />
      </ProductSelectItemDiv>
    </>
  );
};

export default ProductSelectItem;
