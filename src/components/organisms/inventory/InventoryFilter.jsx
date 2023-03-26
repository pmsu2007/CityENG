import {
  InventoryFilterDiv,
  InventoryFilterInput,
  InventoryFilterInputDiv,
} from "../../../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const InventoryFilter = ({ ...props }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InventoryFilterDiv>
        <InventoryFilterInputDiv>
          <InventoryFilterInput
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onBlur={() => {
              props.getResult(inputValue);
            }}
            value={inputValue}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </InventoryFilterInputDiv>
      </InventoryFilterDiv>
    </>
  );
};

export default InventoryFilter;
