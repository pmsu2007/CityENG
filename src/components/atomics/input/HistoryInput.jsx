import { Historyinput } from "../../../styledComponents";
import { useState } from "react";

const HistoryInput = ({ ...props }) => {
  const [inputValue, setInputValue] = useState();

  return (
    <>
      <Historyinput
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

export default HistoryInput;