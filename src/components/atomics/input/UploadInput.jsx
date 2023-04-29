import { Uploadinput } from "../../../styledComponents";
import { useState } from "react";

const UploadInput = ({ ...props }) => {
  const [inputValue, setInputValue] = useState(props.value);

  return (
    <>
      <Uploadinput
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

export default UploadInput;

