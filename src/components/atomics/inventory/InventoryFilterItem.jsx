import { InventoryFilterItemDiv } from "../../../styledComponents";

const InventoryFilterItem = ({setFilterText, setToggle, text}) => {
  
  const onClick = () => {
    setToggle(true);
    setFilterText(text);
  };
  
  return (
    <>
      <InventoryFilterItemDiv key={text} onClick={onClick}>{text}</InventoryFilterItemDiv>
    </>
  );
};

export default InventoryFilterItem;
