import { AttrOption, Attrselect } from "../../../styledComponents";
import { useState } from "react";

const AttrSelect = ({ options, ...props }) => {
  const [selectValue, setSelectValue] = useState();
  return (
    <>
      <Attrselect
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
        onBlur={() => {
          props.getResult({ [props.name]: selectValue });
        }}
      >
        <AttrOption />
        {options &&
          options.map((option, idx) => (
            <AttrOption key={idx} value={option.id}>
              {option.name}
            </AttrOption>
          ))}
      </Attrselect>
    </>
  );
};

export default AttrSelect;
