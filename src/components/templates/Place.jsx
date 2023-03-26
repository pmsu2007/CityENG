import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import usePlaceList from "../../hooks/usePlaceList";
import {
  PlaceAddButton,
  PlaceDiv,
  PlaceInputDiv,
  PlaceListDiv,
  PlaceInput,
  PlaceInputButton,
  HeaderButton,
} from "../../styledComponents";
import Header from "../organisms/common/Header";
import PlaceItem from "../organisms/place/PlaceItem";
import axios from "axios";
import { APIURL } from "../../config/key";
import { getCookie } from "../../config/cookie";

const Place = () => {
  // 파라미터 키
  const param = useParams();
  const id = param.team_id;

  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  // 위치
  const places = usePlaceList(id);

  const onChangeName = useCallback((e) => {
    const currName = e.target.value;
    setName(currName);
  }, []);

  const sendCreateRequest = async () => {
    const res = await axios.post(
      `${APIURL}/api/teams/${id}/place`,
      {
        name: name,
        memo: "",
      },
      {
        headers: {
          Authorization: `Bearer ${getCookie("key")}`,
        },
      }
    );

    if (res.status === 201) {
      setName("");
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
    if (!toggle) {
      setToggle(true);
    } else {
      sendCreateRequest();
      setToggle(false);
    }
  };

  return (
    <>
      <Header text={"위치 설정"} />
      <HeaderButton onClick={onDeleteClick}>삭제</HeaderButton>
      <PlaceDiv>
        <PlaceListDiv>
          {places &&
            places.map((place) => (
              <PlaceItem
                key={place.id}
                id={place.id}
                name={place.name}
                isDelete={isDelete}
                team_id={id}
              />
            ))}
        </PlaceListDiv>
        {toggle ? (
          <PlaceInputDiv>
            <PlaceInput type="text" value={name} onChange={onChangeName} />
            <PlaceInputButton onClick={onPlusClick}>등록</PlaceInputButton>
          </PlaceInputDiv>
        ) : (
          <PlaceAddButton onClick={onPlusClick}>+</PlaceAddButton>
        )}
      </PlaceDiv>
    </>
  );
};

export default Place;
