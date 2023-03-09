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

const AttrItem = ({ id, name, type, isDelete }) => {
  const onDeleteClick = () => {
    sendDeleteRequest();
  };

  const sendDeleteRequest = async () => {
    const res = await axios.delete(`${APIURL}/api/teams/attrs/${id}`);
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
