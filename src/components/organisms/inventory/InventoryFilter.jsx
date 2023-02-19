import { useState } from "react";
import {
  InventoryFilterDiv,
  InventoryFilterListDiv,
  InventoryFilterBtn,
  InventoryFilterInput,
  InventoryFilterInputDiv,
} from "../../../styledComponents";
import { filter } from "../../../data";
import InventoryFilterItem from "../../atomics/inventory/InventoryFilterItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const InventoryFilter = () => {
  const [toggle, setToggle] = useState(true);
  const [filterText, setFilterText] = useState("전체 보기");

  const onFilterClick = (e) => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <>
      <InventoryFilterDiv>
        {toggle ? (
          <>
            <InventoryFilterBtn onClick={onFilterClick}>
              {filterText}
              <FontAwesomeIcon icon={faAngleDown} />
            </InventoryFilterBtn>
            <InventoryFilterInputDiv>
              <InventoryFilterInput />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </InventoryFilterInputDiv>
          </>
        ) : (
          <InventoryFilterListDiv>
            {filter.map((item) => (
              <div key={item.name}>
                <InventoryFilterItem
                  setFilterText={setFilterText}
                  setToggle={setToggle}
                  text={item.text}
                />
              </div>
            ))}
          </InventoryFilterListDiv>
        )}
      </InventoryFilterDiv>
    </>
  );
};

export default InventoryFilter;
