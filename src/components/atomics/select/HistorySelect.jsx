import { HistoryOption, Historyselect } from "../../../styledComponents";
import { useState } from "react";

const HistorySelect = ({ options, ...props }) => {
  const [selectValue, setSelectValue] = useState();
  return (
    <>
      <Historyselect
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
        onBlur={() => {
          props.getResult({ [props.name]: selectValue });
        }}
      >
        <HistoryOption />
        {options &&
          options.map((option, idx) => (
            <HistoryOption key={idx} value={option.type}>
              {option.name}
            </HistoryOption>
          ))}
      </Historyselect>
    </>
  );
};

export default HistorySelect;