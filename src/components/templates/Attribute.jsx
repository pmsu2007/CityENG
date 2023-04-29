import Header from "../organisms/common/Header";
import {
  AttrDiv,
  AttrListDiv,
  HeaderButton,
  AttrAddButton,
  AttrInputDiv,
  AttrInputButton,
  AttrInputInnerDiv,
  AttrLabel,
  AttrValueTagDiv,
  AttrValueTagListDiv,
} from "../../styledComponents";
import { useState } from "react";
import useAttrList from "../../hooks/useAttrList";
import { useParams } from "react-router-dom";
import AttrItem from "../organisms/attribute/AttrItem";
import axios from "axios";
import { APIURL } from "../../config/key";
import AttrInput from "../atomics/input/AttrInput";
import { getCookie } from "../../config/cookie";
import AttrValueInput from "../atomics/input/AttrValueInput";

const Attribute = () => {
  const param = useParams();
  const id = param.team_id;

  const [isDelete, setIsDelete] = useState(false);
  const [addToggle, setAddToggle] = useState(false);
  const [values, setValues] = useState([]);
  const [body, setBody] = useState({
    name: "",
    type: "",
  });
  // console.log(values)
  const attrs = useAttrList(id);
  // console.log(attrs);
  const getBodyResult = (obj) => {
    const key = Object.keys(obj);
    setBody({ ...body, [key]: obj[key] });
  };

  const getValueResult = (obj) => {
    const findIdx = values.findIndex((value) => value === obj);

    if (findIdx < 0) {
      setValues([...values, obj]);
    }
  };

  const sendCreateRequest = async () => {
    const requestBody = {
      name: body.name,
      type: "STRING",
      values: values,
    };
    // console.log(requestBody);
    const res = await axios.post(
      `${APIURL}/api/teams/${id}/attr`,
      requestBody,
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
            <AttrInputInnerDiv>
              <AttrLabel>속성 이름</AttrLabel>
              <AttrInput name="name" getResult={getBodyResult} />
            </AttrInputInnerDiv>

            <AttrInputInnerDiv>
              <AttrLabel>속성값</AttrLabel>
              <AttrValueInput getResult={getValueResult} />
            </AttrInputInnerDiv>
            <AttrValueTagListDiv>
              {values &&
                values.map((value, idx) => (
                  <AttrValueTagDiv key={idx}>
                    <div style={{ marginRight: 10 }}>{value}</div>
                    <div
                      style={{ padding: "0 5px" }}
                      onClick={() => {
                        setValues(values.filter((item) => item != values[idx]));
                      }}
                    >
                      X
                    </div>
                  </AttrValueTagDiv>
                ))}
            </AttrValueTagListDiv>
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
