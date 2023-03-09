 import {
  InventoryFilterDiv,
  InventoryFilterInput,
  InventoryFilterInputDiv,
  InventoryFilterSelect,
  InventoryFilterOption,
} from "../../../styledComponents";
import { filterData } from "../../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";

const InventoryFilter = ({search, setSearch }) => {

  const onSearchChange = useCallback(
    (e) => {
      const currSearch = e.target.value;
      setSearch(currSearch);
    },
    [setSearch]
  );

  return (
    <>
      <InventoryFilterDiv>
        <InventoryFilterSelect>
          {filterData.map((item) => (
            <InventoryFilterOption key={item.name} value={item.data}>
              {item.text}
            </InventoryFilterOption>
          ))}
        </InventoryFilterSelect>
        <InventoryFilterInputDiv>
          <InventoryFilterInput onChange={onSearchChange} value={search} />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </InventoryFilterInputDiv>
      </InventoryFilterDiv>
    </>
  );
};

export default InventoryFilter;
