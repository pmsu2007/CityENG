import { typeData } from "../../../data";
import {
  AttrItemDiv,
  AttrItemNameDiv,
  AttrItemSettingDiv,
  AttrItemInnerDiv,
  AttrItemTypeDiv,
  AttrValueTagListDiv,
  AttrValueTagDiv,
} from "../../../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { APIURL } from "../../../config/key";
import { getCookie } from "../../../config/cookie";
import { useState, useEffect } from "react";

const AttrItem = ({ id, name, type, isDelete, team_id }) => {
  const onDeleteClick = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      sendDeleteRequest();
    }
  };

  const sendDeleteRequest = async () => {
    const res = await axios.delete(
      `${APIURL}/api/teams/${team_id}/attrs/${id}`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("key")}`,
        },
      }
    );
    if (res.status === 204) {
      window.location.reload();
    } else {
      console.log("속성 삭제 실패");
    }
  };

  const [values, setValues] = useState([]);

  const sendRequest = async () => {
    const res = await axios.get(`${APIURL}/api/teams/attrs/${id}/values`, {
      headers: {
        Authorization: `Bearer ${getCookie("key")}`,
      },
    });
    if (res.status === 200) {
      setValues(res.data);
    } else {
      console.log("속성 값 호출 실패");
    }
  };

  useEffect(() => {
    sendRequest();
  }, [id]);

  return (
    <>
      <AttrItemDiv>
        <AttrItemInnerDiv>
          <AttrItemNameDiv>{name}</AttrItemNameDiv>
          {typeData.map((data) =>
            data.id === type ? (
              <AttrItemTypeDiv key={data.name}>{data.name}</AttrItemTypeDiv>
            ) : null
          )}
          <AttrItemSettingDiv>
            {isDelete ? (
              <FontAwesomeIcon
                onClick={onDeleteClick}
                icon={faTrash}
                size="lg"
              />
            ) : null}
          </AttrItemSettingDiv>
        </AttrItemInnerDiv>
        <AttrValueTagListDiv>
          {values &&
            values.map((value, idx) => (
              <AttrValueTagDiv key={idx}>{value}</AttrValueTagDiv>
            ))}
        </AttrValueTagListDiv>
      </AttrItemDiv>
    </>
  );
};

export default AttrItem;
