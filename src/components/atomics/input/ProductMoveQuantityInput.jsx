import {
  ProductQuantityinput,
  ProductSelectItemInnerDiv,
} from "../../../styledComponents";
import { useState } from "react";
import { useParams } from "react-router-dom";
const ProductMoveQuantityInput = ({ ...props }) => {
  const [inputValue, setInputValue] = useState(0);
  const param = useParams();
  const teamId = param.team_id;

  return (
    <>
      <ProductSelectItemInnerDiv>
        <ProductQuantityinput
          type="number"
          value={inputValue || ""}
          onChange={(e) => {
            setInputValue(Number(e.target.value));
          }}
          onBlur={() => {
            props.getResult({
              id: teamId,
              productId: props.productId,
              quantity: inputValue,
              toPlaceId: props.toPlace,
              toQuantity: inputValue,
              fromPlaceId: props.fromPlace,
              fromQuantity: props.quantity,
            });
          }}
        />
      </ProductSelectItemInnerDiv>
    </>
  );
};

export default ProductMoveQuantityInput;
