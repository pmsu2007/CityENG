import Header from "../organisms/common/Header";
import {
  AttrDiv,
  AttrListDiv,
  HeaderButton,
  AttrAddButton,
  AttrInputDiv,
  AttrInputButton,
  AttrInput,
  AttrInnerInputDiv,
  AttrSelect,
  AttrOption,
} from "../../styledComponents";
import { useState, useCallback } from "react";
import useAttrList from "../../hooks/useAttrList";
import { useParams } from "react-router-dom";
import AttrItem from "../organisms/attribute/AttrItem";
import axios from "axios";
import { APIURL } from "../../config/key";
import { typeData } from "../../data";

const Attribute = () => {
  const param = useParams();
  const id = param.team_id;

  const [isDelete, setIsDelete] = useState(false);
  const [addToggle, setAddToggle] = useState(false);

  const [name, setName] = useState("");
  const [type, setType] = useState();
  
  const attrs = useAttrList(id);

  const onChangeName = useCallback(
    (e) => {
      const currName = e.target.value;
      setName(currName);
    },
    [setName]
  );
  const onChangeType = useCallback(
    (e) => {
      const currType = e.target.value;
      setType(currType);
    },
    [setType]
  );

  const sendCreateRequest = async () => {
    const res = await axios.post(`${APIURL}/api/teams/${id}/attr`, {
      name: name,
      type: type.name,
    });

    if (res.status === 201) {
      window.location.reload();
    } else {
      console.log("위치 등록 실패");
    }
  };

  const onDeleteClick = () => {
    if (!isDelete) {
      setIsDelete(true);
    } else {
      setIsDelete(false);
    }
  };

  const onPlusClick = () => {
    if (!addToggle) {
      setAddToggle(true);
    } else {
      sendCreateRequest();
      setAddToggle(false);
    }
  };

  return (
    <>
      <Header text={"제품 속성"} />
      <HeaderButton onClick={onDeleteClick}>삭제</HeaderButton>
      <AttrDiv>
        <AttrListDiv>
          {attrs &&
            attrs.map((attr) => (
              <AttrItem
                key={attr.id}
                id={attr.id}
                name={attr.name}
                type={attr.type}
                isDelete={isDelete}
              />
            ))}
        </AttrListDiv>
        {addToggle ? (
          <AttrInputDiv>
            <AttrInput type="text" value={name} onChange={onChangeName} />
            <AttrInnerInputDiv>
              <AttrSelect onChange={onChangeType}>
                <AttrOption />
                {typeData.map((data) => (
                  <AttrOption key={data.name} value={data.name}>{data.text}</AttrOption>
                ))}
              </AttrSelect>
              <AttrInputButton onClick={onPlusClick}>등록</AttrInputButton>
            </AttrInnerInputDiv>
          </AttrInputDiv>
        ) : (
          <AttrAddButton onClick={onPlusClick}>+</AttrAddButton>
        )}
      </AttrDiv>
    </>
  );
};

export default Attribute;
