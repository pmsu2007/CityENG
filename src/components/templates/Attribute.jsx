import Header from "../organisms/common/Header";
import {
  AttrDiv,
  AttrListDiv,
  HeaderButton,
  AttrAddButton,
  AttrInputDiv,
  AttrInputButton,
} from "../../styledComponents";
import { useState } from "react";
import useAttrList from "../../hooks/useAttrList";
import { useParams } from "react-router-dom";
import AttrItem from "../organisms/attribute/AttrItem";
import axios from "axios";
import { APIURL } from "../../config/key";
import AttrInput from "../atomics/input/AttrInput";
import { getCookie } from "../../config/cookie";

const Attribute = () => {
  const param = useParams();
  const id = param.team_id;

  const [isDelete, setIsDelete] = useState(false);
  const [addToggle, setAddToggle] = useState(false);

  const [body, setBody] = useState({
    name: "",
    type: "",
  });

  const attrs = useAttrList(id);
  // console.log(attrs);
  const getBodyResult = (obj) => {
    const key = Object.keys(obj);
    setBody({ ...body, [key]: obj[key] });
    console.log(body);
  };

  const sendCreateRequest = async () => {
    const res = await axios.post(
      `${APIURL}/api/teams/${id}/attr`,
      {
        name: body.name,
        type: "STRING",
      },
      {
        headers: {
          Authorization: `Bearer ${getCookie("key")}`,
        },
      }
    );

    if (res.status === 201) {
      window.location.reload();
    } else {
      console.log("속성 등록 실패");
    }
  };

  return (
    <>
      <Header text={"제품 속성"} />
      <HeaderButton
        onClick={() => {
          setIsDelete((e) => !e);
        }}
      >
        삭제
      </HeaderButton>
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
                team_id={id}
              />
            ))}
        </AttrListDiv>
        {addToggle ? (
          <AttrInputDiv>
            <AttrInput name="name" getResult={getBodyResult} />
            <AttrInputButton
              onClick={() => {
                setAddToggle((e) => !e);
                sendCreateRequest();
              }}
            >
              등록
            </AttrInputButton>
          </AttrInputDiv>
        ) : (
          <AttrAddButton
            onClick={() => {
              setAddToggle((e) => !e);
            }}
          >
            +
          </AttrAddButton>
        )}
      </AttrDiv>
    </>
  );
};

export default Attribute;
