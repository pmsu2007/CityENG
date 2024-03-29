import { faLocationDot, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PlaceItemDiv,
  PlaceItemSettingDiv,
  PlaceItemTextDiv,
} from "../../../styledComponents";
import { APIURL } from "../../../config/key";
import axios from "axios";
import { getCookie } from "../../../config/cookie";

const PlaceItem = ({ id, name, isDelete, team_id }) => {
  const onDeleteClick = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      sendDeleteRequest();
    }
  };

  const sendDeleteRequest = async () => {
    const res = await axios.delete(
      `${APIURL}/api/teams/${team_id}/places/${id}`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("key")}`,
        },
      }
    );
    if (res.status === 204) {
      window.location.reload();
    } else {
      console.log("위치 삭제 실패");
    }
  };

  return (
    <>
      <PlaceItemDiv>
        <FontAwesomeIcon icon={faLocationDot} size="xl" />
        <PlaceItemTextDiv>{name}</PlaceItemTextDiv>
        <PlaceItemSettingDiv>
          {isDelete ? (
            <FontAwesomeIcon onClick={onDeleteClick} icon={faTrash} size="lg" />
          ) : null}
        </PlaceItemSettingDiv>
      </PlaceItemDiv>
    </>
  );
};

export default PlaceItem;
