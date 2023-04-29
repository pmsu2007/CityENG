import { UploadOption, Uploadselect } from "../../../styledComponents";
import { useState } from "react";

const ProductSelect = ({ options, ...props }) => {
  const [selectValue, setSelectValue] = useState();
  return (
    <>
      <Uploadselect
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
        onBlur={() => {
          props.getResult(selectValue);
        }}
        style={{ marginTop: 10, width: "100%" }}
      >
        <UploadOption>필수 항목 입니다.</UploadOption>
        {options &&
          options.map((option, idx) => (
            <UploadOption key={idx} value={option}>
              {option}
            </UploadOption>
          ))}
      </Uploadselect>
    </>
  );
};

export default ProductSelect;
