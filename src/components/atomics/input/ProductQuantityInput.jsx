import {
  ProductQuantityinput,
  ProductSelectItemInnerDiv,
} from "../../../styledComponents";
import { useState } from "react";
import { useParams } from "react-router-dom";
const ProductQuantityInput = ({ ...props }) => {
  const [inputValue, setInputValue] = useState(0);
  const param = useParams();
  const teamId = param.team_id;

  return (
    <>
      <ProductSelectItemInnerDiv>
        <ProductQuantityinput
          type="number"
          value={inputValue}
          onChange={(e) => {
            if (e.target.value < 0) {
              setInputValue(0);
            } else {
              setInputValue(Number(e.target.value));
            }
          }}
          onBlur={() => {
            props.getResult({
              id: teamId,
              productId: props.productId,
              quantity: inputValue,
              toPlaceId: props.placeId,
              toQuantity: inputValue,
              fromPlaceId: props.placeId,
              fromQuantity: props.quantity,
            });
          }}
        />
      </ProductSelectItemInnerDiv>
    </>
  );
};

export default ProductQuantityInput;
