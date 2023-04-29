import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAttrList from "../../hooks/useAttrList";
import {
  UploadInputDiv,
  UploadAttrInputInnerDiv,
  UploadInputInnerDiv,
  UploadLabel,
  UploadInventoryAttrDiv,
  UploadInventoryAttrHeaderDiv,
  UploadAddButton,
  UploadInventoryPrevAttrDiv,
} from "../../styledComponents";
import InventoryAttrItem from "../atomics/inventory/InventoryAttrItem";
import UploadInput from "../atomics/input/UploadInput";
import axios from "axios";
import { APIURL } from "../../config/key";
import { getCookie } from "../../config/cookie";
import useProductDetail from "../../hooks/useProductDetail";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const param = useParams();
  const teamId = param.team_id;
  const productId = param.product_id;

  const attrs = useAttrList(teamId);
  const product = useProductDetail(productId);
  console.log(product);

  const [body, setBody] = useState({
    name: "",
  });

  const getBodyResult = (obj) => {
    const key = Object.keys(obj);
    setBody({ ...body, [key]: obj[key] });
    // console.log(body);
  };

  const [attributes, setAttributes] = useState([{ id: "", value: "" }]);

  const getAttrResult = (obj) => {
    const findIdx = attributes.findIndex(
      (attribute) => attribute.id === obj.id
    );
    if (findIdx > 0) {
      let copy = [...attributes];
      copy[findIdx] = { ...copy[findIdx], value: obj.value };
      setAttributes(copy);
    } else {
      setAttributes([...attributes, obj]);
    }

    // console.log(attributes);
  };

  const sendRequest = async () => {
    const requestBody = {
      name: body.name,
      barcode: new Date().getTime(),
      attributes: attributes.sort((a, b) => a.id - b.id).slice(1),
    };
    console.log(requestBody);
    const res = await axios.patch(
      `${APIURL}/api/teams/${teamId}/products/${productId}`,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${getCookie("key")}`,
        },
      }
    );

    if (res.status === 200) {
      navigate(`/team/${teamId}/inventory`);
    } else {
      console.log("위치 등록 실패");
    }
  };

  const onSubmit = () => {
    if (attributes) {
      sendRequest();
    } else {
      alert("모든 정보를 입력해주세요");
    }
  };

  return (
    <>
      {product && (
        <UploadInputDiv>
          <UploadInputInnerDiv>
            <UploadLabel>제품명</UploadLabel>
            <UploadInput
              name="name"
              getResult={getBodyResult}
              value={product.name}
            />
          </UploadInputInnerDiv>

          <UploadInventoryAttrDiv>
            <UploadInventoryAttrHeaderDiv>
              <div>제품 속성</div>
            </UploadInventoryAttrHeaderDiv>
            <UploadInventoryPrevAttrDiv>
              <div style={{
                'marginBottom': 10,
                'fontSize': 16
              }}>이전 속성</div>
            {product &&
              product.attributes.map((attribute) => (
                <div>{`${attribute.name} : ${attribute.value}`}</div>
              ))}
            </UploadInventoryPrevAttrDiv>
            {attrs &&
              attrs.map((attr) => (
                <UploadAttrInputInnerDiv key={attr.id}>
                  <UploadLabel>{attr.name}</UploadLabel>
                  <InventoryAttrItem id={attr.id} getResult={getAttrResult} />
                </UploadAttrInputInnerDiv>
              ))}
          </UploadInventoryAttrDiv>
          <UploadAddButton onClick={onSubmit}> 등록 </UploadAddButton>
        </UploadInputDiv>
      )}
    </>
  );
};

export default UpdateProduct;
