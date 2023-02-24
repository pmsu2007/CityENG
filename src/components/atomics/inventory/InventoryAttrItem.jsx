import { useEffect, useState } from "react";
import axios from "axios";
import { APIURL } from "../../../config/key";
import {
  Uploadselect,
  UploadOption,
  Uploadinput,
} from "../../../styledComponents";

const InventoryAttrItem = ({ id, getResult }) => {
  const [values, setValues] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [selectValue, setSelectValue] = useState();

  const sendRequest = async () => {
    const res = await axios.get(`${APIURL}/api/teams/attrs/${id}/values`);
    if (res.status === 200) setValues(res.data);
  };

  useEffect(() => {
    sendRequest();
  });

  return (
    <>
      {values.length === 0 ? (
        <Uploadinput
          value={inputValue || ""}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onBlur={() => {
            getResult({ id: id, value: inputValue });
          }}
        />
      ) : (
        <Uploadselect
          value={selectValue}
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
          onBlur={() => {
            getResult({ id: id, value: selectValue });
          }}
        >
          <UploadOption/>
          {values &&
            values.map((value, idx) => (
              <UploadOption key={idx} value={value}>
                {value}
              </UploadOption>
            ))}
        </Uploadselect>
      )}
    </>
  );
};

export default InventoryAttrItem;
