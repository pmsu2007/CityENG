import { FilterInventoryDiv, InventoryListDiv } from "../../styledComponents";
import InventoryFilter from "../organisms/inventory/InventoryFilter";
import { useState } from "react";
import useProductList from "../../hooks/useProductList";
import InventoryItem from "../organisms/inventory/InventoryItem";

const Inventory = () => {
  const [filterText, setFilterText] = useState("전체 보기");
  const [searchText, setSearchText] = useState("");

  const products = useProductList();
  return (
    <>
      <FilterInventoryDiv>
        <InventoryFilter
          filter={filterText}
          setFilter={setFilterText}
          search={searchText}
          setSearch={setSearchText}
        />
        <InventoryListDiv>
          {products &&
            products.map((product) => (
              <InventoryItem
                key={product.id}
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
