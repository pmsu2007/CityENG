import { useState, memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePlaceList from "../../hooks/usePlaceList";
import useAttrList from "../../hooks/useAttrList";
import {
  UploadInputDiv,
  UploadAttrInputInnerDiv,
  UploadInputInnerDiv,
  UploadLabel,
  UploadInventoryAttrDiv,
  UploadInventoryAttrHeaderDiv,
  UploadInventoryAttrHeaderBtn,
  UploadAddButton,
} from "../../styledComponents";
import InventoryAttrItem from "../atomics/inventory/InventoryAttrItem";
import UploadSelect from "../atomics/select/UploadSelect";
import UploadInput from "../atomics/input/UploadInput";
import axios from "axios";
import { APIURL } from "../../config/key";
import { getCookie } from "../../config/cookie";

const UploadInventory = () => {
  const navigate = useNavigate();
  const param = useParams();
  const teamId = param.team_id;

  const places = usePlaceList(teamId);
  const attrs = useAttrList(teamId);

  const [body, setBody] = useState({
    name: "",
    place: "",
    quantity: 0,
  });

  const [attributes, setAttributes] = useState([{ id: "", value: "" }]);
  
  const goAttrPage = () => {
    navigate(`/team/${teamId}/attrs`);
  };

  const getBodyResult = (obj) => {
    const key = Object.keys(obj);
    setBody({ ...body, [key]: obj[key] });
    // console.log(body);
  };

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

    console.log(attributes);
  };

  const getPlaceResult =
    places &&
    places.map((place) => {
      let obj;
      if (place.id == body.place) {
        obj = {
          id: body.place,
          quantity: body.quantity,
        };
      } else {
        obj = {
          id: place.id,
          quantity: 0,
        };
      }
      return obj;
    });

  const sendRequest = async () => {
    const requestBody = {
      name: body.name,
      barcode: new Date().getTime(),
      places: getPlaceResult,
      attributes: attributes.slice(1),
    };
    console.log(requestBody);
    const res = await axios.post(
      `${APIURL}/api/teams/${teamId}/product`,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${getCookie("key")}`,
        },
      }
    );

    if (res.status === 201) {
      navigate(`/team/${teamId}/inventory`);
    } else {
      console.log("위치 등록 실패");
    }
  };

  const onSubmit = () => {
    sendRequest();
  };

  return (
    <>
      <UploadInputDiv>
        <UploadInputInnerDiv>
          <UploadLabel>위치</UploadLabel>
          <UploadSelect
            options={places}
            name="place"
            getResult={getBodyResult}
          />
        </UploadInputInnerDiv>
        <UploadInputInnerDiv>
          <UploadLabel>제품명</UploadLabel>
          <UploadInput name="name" getResult={getBodyResult} />
        </UploadInputInnerDiv>
        <UploadInputInnerDiv>
          <UploadLabel>수량</UploadLabel>
          <UploadInput name="quantity" getResult={getBodyResult} />
        </UploadInputInnerDiv>

        <UploadInventoryAttrDiv>
          <UploadInventoryAttrHeaderDiv>
            <div>제품 속성</div>
            <UploadInventoryAttrHeaderBtn onClick={goAttrPage}>
              + 속성 편집
            </UploadInventoryAttrHeaderBtn>
          </UploadInventoryAttrHeaderDiv>
          {attrs &&
            attrs.map((attr) => (
              <UploadAttrInputInnerDiv key={attr.id}>
                <UploadLabel>{attr.name}</UploadLabel>
                <InventoryAttrItem
                  id={attr.id}
                  name={attr.name}
                  getResult={getAttrResult}
                />
              </UploadAttrInputInnerDiv>
            ))}
        </UploadInventoryAttrDiv>
        <UploadAddButton onClick={onSubmit}> 등록 </UploadAddButton>
      </UploadInputDiv>
    </>
  );
};

export default memo(UploadInventory);
