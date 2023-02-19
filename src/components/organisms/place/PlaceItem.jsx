import { faLocationDot, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlaceItemDiv, PlaceItemSettingDiv, PlaceItemTextDiv } from "../../../styledComponents";
import { APIURL } from "../../../config/key";
import axios from "axios";
import { useState } from "react";

const PlaceItem = ({id, name, isDelete}) => {
    
    
    const onDeleteClick = () => {
        sendDeleteRequest();
    }

    const sendDeleteRequest = async () => {
        const res = await axios.delete(`${APIURL}/api/teams/places/${id}`);
        if (res.status === 204) {
          window.location.reload();
        } else {
          console.log("위치 삭제 실패");
        }
      };

    return (
        <>
        <PlaceItemDiv>
            <FontAwesomeIcon icon={faLocationDot} size="xl"/>
            <PlaceItemTextDiv>{name}</PlaceItemTextDiv>
            <PlaceItemSettingDiv>
                {isDelete ? (<FontAwesomeIcon onClick={onDeleteClick} icon={faTrash} size="lg"/>) : (null)}
            </PlaceItemSettingDiv>
        </PlaceItemDiv>
        </>
    )
}

export default PlaceItem;