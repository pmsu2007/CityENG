import { ProductQuantityinput } from "../../../styledComponents";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductQuantityInput = ({ ...props }) => {
  const [inputValue, setInputValue] = useState(0);
  const param = useParams();
  const teamId = param.team_id;
  return (
    <>
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
            toPlaceId: props.placeId,
            toQuantity: inputValue,
            fromPlaceId: props.placeId,
            fromQuantity: props.quantity,
          });
        }}
      />
    </>
  );
};

export default ProductQuantityInput;
