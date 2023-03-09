import { ProductFilterinput } from "../../../styledComponents";
import { useState } from "react";
import { useEffect } from "react";

const ProductTimeInput = ({ ...props }) => {
  const [inputValue, setInputValue] = useState();

  return (
    <>
      <ProductFilterinput
        type="date"
        value={inputValue || ""}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onBlur={() => {
          props.getResult({ [props.name]: new Date(inputValue).getTime() });
        }}
      />
    </>
  );
};

export default ProductTimeInput;
