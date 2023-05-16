import {
  FilterInventoryDiv,
  InventoryListDiv,
  PlaceAddButton,
  PlaceInventoryDiv,
  PlaceInventoryItemDiv,
  ProductAddBtn,
} from "../../styledComponents";
import InventoryFilter from "../organisms/inventory/InventoryFilter";
import { useEffect, useState } from "react";
import axios from "axios";
import { APIURL } from "../../config/key";
import InventoryItem from "../organisms/inventory/InventoryItem";
import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../../config/cookie";
import usePlaceList from "../../hooks/usePlaceList";
import Pagination from "../organisms/common/Pagination";

const Inventory = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({
    total: 0,
    first: false,
    last: false
  });
  
  const param = useParams();
  const teamId = param.team_id;

  const navigate = useNavigate();

  const places = usePlaceList(teamId);
  const sendRequest = async () => {
    let query = "";
    if (searchText) {
      query = `&value=${searchText}`;
    }
    const res = await axios.get(
      `${APIURL}/api/teams/${teamId}/products/page?page=${page - 1}${query}`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("key")}`,
        },
      }
    );
    
    if (res.status === 200) {
      setProducts(res.data.content);
      setMeta({
        total: res.data.totalElements,
        first: res.data.first,
        last: res.data.last
      });
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    sendRequest();
  }, [searchText, page]);

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
        <ProductAddBtn
          onClick={() => {
            navigate(`/upload/${teamId}/inventory`)
          }}
        >제품 등록 +</ProductAddBtn>
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
        <Pagination meta={meta} page={page} setPage={setPage}/>
      </FilterInventoryDiv>
    </>
  );
};

export default Inventory;
