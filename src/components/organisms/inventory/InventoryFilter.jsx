import { useState } from "react";
import {
  InventoryFilterDiv,
  InventoryFilterListDiv,
  InventoryFilterBtn,
  InventoryFilterInput,
  InventoryFilterInputDiv,
  InventoryFilterSelect,
  InventoryFilterOption,
} from "../../../styledComponents";
import { filterData } from "../../../data";
import InventoryFilterItem from "../../atomics/inventory/InventoryFilterItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";

const InventoryFilter = ({ filter, setFilter, search, setSearch }) => {
  const [fillterToggle, setFilterToggle] = useState(true);

  const onFilterClick = (e) => {
    if (!fillterToggle) {
      setFilterToggle(true);
    } else {
      setFilterToggle(false);
    }
  };

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
