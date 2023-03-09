import { useEffect, useState } from "react";
import axios from "axios";
import { APIURL } from "../../../config/key";
import {
  UploadAttrValueItemDiv,
  Uploadinput,
  UploadAttrInputDiv,
  UploadAttrValueListDiv,
} from "../../../styledComponents";

const InventoryAttrItem = ({ id, getResult }) => {
  const [values, setValues] = useState([]);
  const [inputValue, setInputValue] = useState();

  const [toggle, setToggle] = useState(false);

  const sendRequest = async () => {
    const res = await axios.get(`${APIURL}/api/teams/attrs/${id}/values`);
    if (res.status === 200) setValues(res.data);
  };

  useEffect(() => {
    sendRequest();
  });

  return (
    <>
      <UploadAttrInputDiv>
        <Uploadinput
          value={inputValue || ""}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onBlur={() => {
            getResult({ id: id, value: inputValue });
          }}
          onClick={() => {
            setToggle((e) => !e)
          }}
        />
        { toggle ? (<UploadAttrValueListDiv>
          {values && values.map((value, idx) => (
            <UploadAttrValueItemDiv key={idx} onClick={() => {
              setInputValue(value);
              setToggle((e) => !e);
            }}>
              {value}
            </UploadAttrValueItemDiv>
          ))}
        </UploadAttrValueListDiv>) : (null)}
      </UploadAttrInputDiv>
    </>
  );
};

export default InventoryAttrItem;
