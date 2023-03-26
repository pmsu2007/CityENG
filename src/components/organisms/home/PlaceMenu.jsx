import { useNavigate } from "react-router-dom";
import {
  HomePlaceMenuDiv,
  HomePlaceMenuTitleDiv,
} from "../../../styledComponents";

const PlaceMenu = ({ id }) => {
  const navigate = useNavigate();
  const onPlaceClick = () => {
    navigate(`/team/${id}/places`);
  };

  const onAttrClick = () => {
    navigate(`/team/${id}/attrs`)
  }
  return (
    <>
      <HomePlaceMenuDiv onClick={onPlaceClick}>
        <HomePlaceMenuTitleDiv>위치 설정</HomePlaceMenuTitleDiv>
      </HomePlaceMenuDiv>
      <HomePlaceMenuDiv onClick={onAttrClick}>
        <HomePlaceMenuTitleDiv>속성 설정</HomePlaceMenuTitleDiv>
      </HomePlaceMenuDiv>
    </>
  );
};

export default PlaceMenu;
