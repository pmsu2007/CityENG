import {
  InventorySearchDiv,
  InventorySearchInput,
  InventorySearchLabel,
} from "../../../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
const InventorySearch = () => {
  return (
    <>
      <InventorySearchDiv>
        <InventorySearchInput />
        <InventorySearchLabel>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </InventorySearchLabel>
      </InventorySearchDiv>
    </>
  );
};

export default InventorySearch;
