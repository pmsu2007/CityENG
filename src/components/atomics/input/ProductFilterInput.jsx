import { ProductFilterinput } from "../../../styledComponents";
import { useState } from "react";

const ProductFilterInput = ({ ...props }) => {
  const [inputValue, setInputValue] = useState();
  return (
    <>
      <ProductFilterinput
        value={inputValue || ""}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onBlur={() => {
          props.getResult({ [props.name]: inputValue });
        }}
      />
    </>
  );
};

export default ProductFilterInput;
