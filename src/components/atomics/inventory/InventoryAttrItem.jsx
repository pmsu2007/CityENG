import { UploadAttrInputDiv } from "../../../styledComponents";
import ValueSelect from "../select/ValueSelect";

const InventoryAttrItem = ({ id, getResult }) => {
  let values;

  if (id == 1) {
    values = ["도시가스", "LPG", "전기", "가스"];
  } else if (id == 2) {
    values = ["일반보일러","콘덴싱보일러","전기온수기", "가스온수기", "업소용"];
  }
  
  return (
    <>
      <UploadAttrInputDiv>
        <ValueSelect options={values} getResult={getResult} id={id} name="value" />
      </UploadAttrInputDiv>
    </>
  );
};

export default InventoryAttrItem;
