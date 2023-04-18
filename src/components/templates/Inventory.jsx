import {
  FilterInventoryDiv,
  InventoryListDiv,
  PlaceInventoryDiv,
  PlaceInventoryItemDiv,
} from "../../styledComponents";
import InventoryFilter from "../organisms/inventory/InventoryFilter";
import { useEffect, useState } from "react";
import axios from "axios";
import { APIURL } from "../../config/key";
import InventoryItem from "../organisms/inventory/InventoryItem";
import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../../config/cookie";
import usePlaceList from "../../hooks/usePlaceList";

const Inventory = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  const param = useParams();
  const teamId = param.team_id;

  const navigate = useNavigate();

  const places = usePlaceList(teamId);
  const sendRequest = async () => {
    let query = "";
    if (searchText) {
      query = `?value=${searchText}`;
    }
    const res = await axios.get(
      `${APIURL}/api/teams/${teamId}/products/page${query}`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("key")}`,
        },
      }
    );
    // console.log(`${APIURL}/api/teams/${teamId}/products/page${query}`)
    // console.log(res);
    if (res.status === 200) {
      setProducts(res.data.content);
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    sendRequest();
  }, [searchText]);

  return (
    <>
      <FilterInventoryDiv>
        <InventoryFilter getResult={setSearchText} />
        <PlaceInventoryDiv>
          {places &&
            places.map((place) => (
              <PlaceInventoryItemDiv
                key={place.id}
                onClick={() => {
                  navigate(`place/${place.id}`);
                }}
              >
                {place.name}
              </PlaceInventoryItemDiv>
            ))}
        </PlaceInventoryDiv>
        <InventoryListDiv>
          {products &&
            products.map((product) => (
              <InventoryItem
                key={product.id}
                id={product.id}
                name={product.name}
                img={product.imageUrl}
                barcode={product.barcode}
                places={product.places}
              />
            ))}
        </InventoryListDiv>
      </FilterInventoryDiv>
    </>
  );
};

export default Inventory;
