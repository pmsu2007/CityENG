import { AttrOption, Attrselect } from "../../../styledComponents";
import { useState } from "react";

const ValueSelect = ({ options, ...props }) => {
  const [selectValue, setSelectValue] = useState();
  return (
    <>
      <Attrselect
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
        onBlur={() => {
          props.getResult({ id: props.id, [props.name]: selectValue });
        }}
      >
        <AttrOption />
        {options &&
          options.map((option, idx) => (
            <AttrOption key={idx} value={option}>
              {option}
            </AttrOption>
          ))}
      </Attrselect>
    </>
  );
};

export default ValueSelect;
