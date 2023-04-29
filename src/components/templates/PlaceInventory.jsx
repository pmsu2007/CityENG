import {
  FilterInventoryDiv,
  InventoryListDiv,
  PlaceInventoryHeaderDiv,
} from "../../styledComponents";
import { useEffect, useState } from "react";
import axios from "axios";
import { APIURL } from "../../config/key";
import InventoryItem from "../organisms/inventory/InventoryItem";
import { useParams } from "react-router-dom";
import { getCookie } from "../../config/cookie";
import usePlaceList from "../../hooks/usePlaceList";
import ProductSelect from "../atomics/select/ProductSelect";
import { filterType } from "../../data";

const PlaceInventory = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  const param = useParams();
  const teamId = param.team_id;
  const placeId = param.place_id;
  const places = usePlaceList(teamId);

  const getResult = (obj) => {
    setFilter(obj);
  };

  const sendRequest = async () => {
    const res = await axios.get(
      `${APIURL}/api/teams/${teamId}/places/${placeId}/products/page`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("key")}`,
        },
      }
    );

    console.log(res.data);
    if (res.status === 200) {
      setProducts(res.data.content);
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <>
      <FilterInventoryDiv>
        {places &&
          places.map((place) => {
            if (place.id == placeId)
              return (
                <>
                  <PlaceInventoryHeaderDiv>
                    {place.name}
                  </PlaceInventoryHeaderDiv>
                </>
              );
          })}
        <ProductSelect
          options={filterType}
          name="filter"
          getResult={getResult}
        />

        <InventoryListDiv>
          {products &&
            products
              .filter((product) => product.attributes[1].value == filter)
              .map((product) => (
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

export default PlaceInventory;
