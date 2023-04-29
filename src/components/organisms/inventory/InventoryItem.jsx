import { useNavigate, useParams } from "react-router-dom";
import {
  InventoryItemDiv,
  InventoryItemQuantityDiv,
} from "../../../styledComponents";

const InventoryItem = ({ id, name, img, places }) => {
  const quantity = places
    .map((place) => place.quantity)
    .reduce((prev, curr) => prev + curr, 0);
  const navigate = useNavigate();
  const param = useParams();
  const teamId = param.team_id;
  const goDetail = () => {
    navigate(`/team/${teamId}/inventory/${id}`);
  };
  return (
    <>
      <InventoryItemDiv onClick={goDetail}>
        <div style={{marginLeft:"10px", fontSize:"24pxgit"}}>{name}</div>
        <InventoryItemQuantityDiv>{quantity}</InventoryItemQuantityDiv>
      </InventoryItemDiv>
    </>
  );
};

export default InventoryItem;
