import {
  ProductQuantityinput,
  ProductSelectItemInnerDiv,
} from "../../../styledComponents";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
const ProductMoveQuantityInput = ({ ...props }) => {
  const [inputValue, setInputValue] = useState(0);
  const param = useParams();
  const teamId = param.team_id;

  const onClickPlus = () => {
    setInputValue(inputValue + 1);
  };

  const onClickMinus = () => {
    if (inputValue <= 0) {
      setInputValue(0);
    } else {
      setInputValue(inputValue - 1);
    }
  };
  return (
    <>
      <ProductSelectItemInnerDiv>
        {/* <FontAwesomeIcon icon={faMinus} onClick={onClickMinus} /> */}
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
        {/* <FontAwesomeIcon icon={faPlus} onClick={onClickPlus} /> */}
      </ProductSelectItemInnerDiv>
    </>
  );
};

export default ProductMoveQuantityInput;
