import { UploadOption, Uploadselect } from "../../../styledComponents";
import { useState } from "react";

const UploadSelect = ({ options, ...props }) => {
  const [selectValue, setSelectValue] = useState();
  return (
    <>
      <Uploadselect
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
        onBlur={() => {
          props.getResult({ [props.name]: selectValue });
        }}
      >
        <UploadOption>필수 항목 입니다.</UploadOption>
        {options &&
          options.map((option, idx) => (
            <UploadOption key={idx} value={option.id}>
              {option.name}
            </UploadOption>
          ))}
      </Uploadselect>
    </>
  );
};

export default UploadSelect;
