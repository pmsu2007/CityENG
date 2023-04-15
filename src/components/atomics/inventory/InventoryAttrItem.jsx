import { UploadAttrInputDiv } from "../../../styledComponents";
import ValueSelect from "../select/ValueSelect";

const InventoryAttrItem = ({ id, getResult }) => {
  const values = ["도시가스", "LPG", "전기", "가스"];

  return (
    <>
      <UploadAttrInputDiv>
        <ValueSelect options={values} getResult={getResult} id={id} name="value" />
      </UploadAttrInputDiv>
    </>
  );
};

export default InventoryAttrItem;
