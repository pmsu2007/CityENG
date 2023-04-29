import { Attrinput, AttrValueBtn } from "../../../styledComponents";
import { useState } from "react";

const AttrValueInput = ({ ...props }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Attrinput
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <AttrValueBtn
        onClick={() => {
          props.getResult(inputValue);
        }}
      >
        +
      </AttrValueBtn>
    </>
  );
};

export default AttrValueInput;
