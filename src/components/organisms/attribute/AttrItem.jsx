import { typeData } from "../../../data";
import {
  AttrItemDiv,
  AttrItemNameDiv,
  AttrItemSettingDiv,
  AttrItemTypeDiv,
} from "../../../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { APIURL } from "../../../config/key";
import { getCookie } from "../../../config/cookie";

const AttrItem = ({ id, name, type, isDelete, team_id }) => {
  const onDeleteClick = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      sendDeleteRequest();
    }
  };

  const sendDeleteRequest = async () => {
    const res = await axios.delete(`${APIURL}/api/teams/${team_id}/attrs/${id}`, {
      headers: {
        Authorization: `Bearer ${getCookie("key")}`,
      },
    });
    if (res.status === 204) {
      window.location.reload();
    } else {
      console.log("속성 삭제 실패");
    }
  };

  return (
    <>
      <AttrItemDiv>
        <AttrItemNameDiv>{name}</AttrItemNameDiv>
        {typeData.map((data) =>
          data.id === type ? (
            <AttrItemTypeDiv key={data.name}>{data.name}</AttrItemTypeDiv>
          ) : null
        )}
        <AttrItemSettingDiv>
          {isDelete ? (
            <FontAwesomeIcon onClick={onDeleteClick} icon={faTrash} size="lg" />
          ) : null}
        </AttrItemSettingDiv>
      </AttrItemDiv>
    </>
  );
};

export default AttrItem;
