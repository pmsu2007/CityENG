import { Attrinput } from "../../../styledComponents";
import { useState } from "react";

const AttrInput = ({ ...props }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Attrinput
        value={inputValue}
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

export default AttrInput;