import { useParams } from "react-router-dom";
import { UploadAttrInputDiv } from "../../../styledComponents";
import ValueSelect from "../select/ValueSelect";
import { APIURL } from "../../../config/key";
import { getCookie } from "../../../config/cookie";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const InventoryAttrItem = ({ id, getResult }) => {
  const [values, setValues] = useState([]);

  const sendRequest = async () => {
    const res = await axios.get(`${APIURL}/api/teams/attrs/${id}/values`, {
      headers: {
        Authorization: `Bearer ${getCookie("key")}`,
      },
    });
    if (res.status === 200) {
      setValues(res.data);
    }
  };

  useEffect(() => {
    sendRequest();
  }, [id]);

  return (
    <>
      <UploadAttrInputDiv>
        <ValueSelect
          options={values}
          getResult={getResult}
          id={id}
          name="value"
        />
      </UploadAttrInputDiv>
    </>
  );
};

export default InventoryAttrItem;
