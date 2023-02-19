import {
  UploadInventoryInput,
  UploadInventoryInputDiv,
  UploadInventoryInputInnerDiv,
  UploadInventoryLabel,
} from "../../styledComponents";

const UploadInventory = () => {
  return (
    <>
      <UploadInventoryInputDiv>
        <UploadInventoryInputInnerDiv>
          <UploadInventoryLabel>제품명</UploadInventoryLabel>
          <UploadInventoryInput />
        </UploadInventoryInputInnerDiv>
        <UploadInventoryInputInnerDiv>
          <UploadInventoryLabel>바코드</UploadInventoryLabel>
          <UploadInventoryInput />
        </UploadInventoryInputInnerDiv>
      </UploadInventoryInputDiv>

      
    </>
  );
};

export default UploadInventory;
