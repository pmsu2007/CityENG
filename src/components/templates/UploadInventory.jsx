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

const UploadInventory = () => {
  const navigate = useNavigate();
  const param = useParams();
  const teamId = param.team_id;

  const places = usePlaceList(teamId);
  const attrs = useAttrList(teamId);

  const [body, setBody] = useState({
    name: "",
    barcode: "",
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

    // console.log(attributes);
  };

  const sendRequest = async () => {
    const res = await axios.post(`${APIURL}/api/teams/${teamId}/product`, {
      name: body.name,
      barcode: body.barcode,
      places: [
        {
          id: body.place,
          quantity: Number(body.quantity),
        },
      ],
      attributes: attributes.slice(1),
    });

    if (res.status === 201) {
      navigate(`/team/${teamId}/inventory`);
    } else {
      console.log("?????? ?????? ??????");
    }
  };

  const onSubmit = () => {
    sendRequest();
  };

  return (
    <>
      <UploadInputDiv>
        <UploadInputInnerDiv>
          <UploadLabel>??????</UploadLabel>
          <UploadSelect
            options={places}
            name="place"
            getResult={getBodyResult}
          />
        </UploadInputInnerDiv>
        <UploadInputInnerDiv>
          <UploadLabel>??????</UploadLabel>
          <UploadInput name="quantity" getResult={getBodyResult} />
        </UploadInputInnerDiv>
        <UploadInputInnerDiv>
          <UploadLabel>?????????</UploadLabel>
          <UploadInput name="name" getResult={getBodyResult} />
        </UploadInputInnerDiv>
        <UploadInputInnerDiv>
          <UploadLabel>?????????</UploadLabel>
          <UploadInput name="barcode" getResult={getBodyResult} />
        </UploadInputInnerDiv>

        <UploadInventoryAttrDiv>
          <UploadInventoryAttrHeaderDiv>
            <div>?????? ??????</div>
            <UploadInventoryAttrHeaderBtn onClick={goAttrPage}>
              + ?????? ??????
            </UploadInventoryAttrHeaderBtn>
          </UploadInventoryAttrHeaderDiv>
          {attrs &&
            attrs.map((attr) => (
              <UploadAttrInputInnerDiv key={attr.id}>
                <UploadLabel>{attr.name}</UploadLabel>
                <InventoryAttrItem id={attr.id} getResult={getAttrResult} />
              </UploadAttrInputInnerDiv>
            ))}
        </UploadInventoryAttrDiv>
        <UploadAddButton onClick={onSubmit}> ?????? </UploadAddButton>
      </UploadInputDiv>
    </>
  );
};

export default memo(UploadInventory);
