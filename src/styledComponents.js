import styled from "styled-components";
import { css } from "styled-components";

export const MainPageDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainPageInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 40px);
  height: auto;
  margin-bottom: 70px;
`;

// Common ======================================

export const HorizontalLine = styled.hr`
  width: 90%;
  maring-bottom: 30px;
`;

// Entry =======================================
export const EntryDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EntryLogoImg = styled.img`
  width: 270px;
  height: 270px;
`;

// TeamSelect ========================================

export const TeamSelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

export const TeamSelectHeaderDiv = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 10px 20px;
  margin-bottom: 30px;
`;

export const TeamSelectTitleDiv = styled.div`
  font-size: 30px;
`;

export const TeamSelectButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  color: white;
  background-color: #484848;
  color: white;
  font-size: 14px;
  border-radius: 24px;
  border: 3px solid #484848;
  transition: 0.5s;

  &:hover {
    color: black;
    background-color: white;
  }
`;

export const TeamSelectListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamSelectItemDiv = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 250px;
  border-radius: 24px;
  background-color: #ababab;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
`;

export const TeamSelectImgDiv = styled.img`
  height: 175px;
  width: 90%;
  background-color: white;
`;

export const TeamSelectNameDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 18px;
`;

// Account =====================================

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const LoginInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 35px;
  align-items: center;
`;

export const LoginInput = styled.input`
  width: 55%;
  height: auto;
  line-height: normal;
  padding: 0.8em 0.5em;
  border: none;
  background-color: #eee;
  font-size: 14px;
  border-radius: 24px;
  &:focus {
    outline: none;
  }
`;

export const LoginLabel = styled.label`
  font-size: 14px;
  width: 55px;
`;

export const LoginButton = styled.div`
  width: 40%;
  text-align: center;
  background-color: #484848;
  color: white;
  font-size: 14px;
  border-radius: 24px;
  border: 3px solid #484848;
  padding: 10px 0;
  transition: 0.5s;

  &:hover {
    color: black;
    background-color: white;
  }

  margin-bottom: 10px;
`;

export const GoRegisterButton = styled.div`
  font-size: 14px;
  text-decoration: underline;
`;

export const RegisterTitleDiv = styled.div`
  width: 100%;
  font-size: 30px;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
`;

export const RegisterDiv = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const RegisterInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 35px;
  align-items: center;
`;

export const RegisterInput = styled.input`
  width: 55%;
  height: auto;
  line-height: normal;
  padding: 0.8em 0.5em;
  border: none;
  background-color: #eee;
  font-size: 14px;
  border-radius: 24px;
  &:focus {
    outline: none;
  }
`;

export const RegisterLabel = styled.label`
  font-size: 14px;
  width: 55px;
`;

export const RegisterButton = styled.div`
  width: 40%;
  text-align: center;
  background-color: #484848;
  color: white;
  font-size: 14px;
  border-radius: 24px;
  border: 3px solid #484848;
  padding: 10px 0;
  transition: 0.5s;

  &:hover {
    color: black;
    background-color: white;
  }

  margin-bottom: 10px;
`;

// Header ======================================

export const HeaderDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  position: fixed;
  padding: 15px 20px;
  border-bottom: 2px solid black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    if (props.type === "IN" || props.type === "in") {
      return css`
        border-color: #50a4fa;
        color: #50a4fa;
      `;
    } else if (props.type === "OUT" || props.type === "out") {
      return css`
        border-color: #fb6164;
        color: #fb6164;
      `;
    } else if (props.type === "ADJUST" || props.type === "adjust") {
      return css`
        border-color: #3cb9a0;
        color: #3cb9a0;
      `;
    } else if (props.type === "MOVE" || props.type === "move") {
      return css`
        border-color: #f5a623;
        color: #f5a623;
      `;
    }
  }}
`;

export const HeaderTitle = styled.div`
  font-weight: 700;
`;

export const HeaderButton = styled.div`
  border: 2px solid black;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 5px 10px;
  background-color: black;
  position: fixed;
  right: 20px;
  top: 10px;
  color: white;
`;

// Navigation ===================================

export const NavigationListDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 55px;
  position: fixed;
  padding: 10px 15px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid black;
  background-color: white;
`;

export const NavigationBtnDiv = styled.div`
  box-sizing: border-box;
  width: calc(100% / 4);
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid black;
  border-radius: 8px;
  margin: 0 3px;
  cursor: pointer;
  position: relative;
  z-index: 10;
`;

export const SettingNavBtnDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  border: 2px solid black;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
`;

// Home ==========================================

// == DailyInventory

export const DailyInventoryDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 10px;
  margin: 20px 0;
`;

export const DailyInventoryTitle = styled.div`
  box-sizing: border-box;
  font-weight: 700;
  font-size: 20px;
`;

export const DailyInventoryListDiv = styled.div`
  width: 100%;
  display: flex;
`;

export const DailyInventoryItemDiv = styled.div`
  box-sizing: border-box;
  width: calc(100% / 3);
  margin-bottom: 5px;
  border-left: 1px solid #aaa;
  padding: 0 10px;
`;

export const DailyInventoryItemCount = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;

export const DailyInventoryItemTitle = styled.div`
  font-size: 10px;
`;

// == HomeMenu

export const HomeMenuDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
`;

export const HomeMenuItemDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: calc(100% / 5);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HomeMenuIcon = styled.div`
  width: 35px;
  text-align: center;
  ${(props) => {
    if (props.type === "in") {
      return css`
        color: #50a4fa;
      `;
    } else if (props.type === "out") {
      return css`
        color: #fb6164;
      `;
    } else if (props.type === "adjust") {
      return css`
        color: #3cb9a0;
      `;
    } else if (props.type === "move") {
      return css`
        color: #f5a623;
      `;
    }
  }}
`;

export const HomeMenuText = styled.div`
  margin-left: 20px;
`;

// == PlaceMenu

export const HomePlaceMenuDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  padding: 10px;
`;

export const HomePlaceMenuTitleDiv = styled.div`
  font-size: 18px;
`;
// Place =========================================

export const PlaceDiv = styled.div`
  width: 100%;
  margin-top: 70px;
`;

export const PlaceListDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const PlaceItemDiv = styled.div`
  box-sizing: border-box;
  border: 2px solid black;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #eee;
  border-radius: 8px;
  padding: 5px 15px;
  justify-content: space-between;
  margin-bottom: 20px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
`;

export const PlaceItemTextDiv = styled.div`
  font-size: 18px;
  width: 60%;
`;

export const PlaceItemSettingDiv = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const PlaceAddButton = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  background-color: #484848;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  font-size: 36px;
  color: white;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
`;

export const PlaceInputDiv = styled.div`
  box-sizing: border-box;
  border: 2px solid black;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #eee;
  border-radius: 8px;
  padding: 5px 15px;
  justify-content: space-between;
`;

export const PlaceInput = styled.input`
  width: 65%;
  line-height: normal;
  padding: 0.8em 0.8em;
  background-color: white;
  font-size: 12px;
  border-radius: 12px;
  &:focus {
    outline: none;
  }
`;

export const PlaceInputButton = styled.div`
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 8px;
`;

// Inventory =====================================

export const FilterInventoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 70px;
`;
export const InventoryFilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InventoryFilterBtn = styled.div`
  cursor: pointer;
  margin-bottom: 10px;
`;

export const InventoryFilterListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-radius: 10px;
  border: 2px solid black;
  box-sizing: border-box;
  padding: 10px 0;
`;

export const InventoryFilterItemDiv = styled.div`
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
`;

export const InventoryFilterSelect = styled.select`
  width: 68%;
  padding: 0.6em 0.6em;
  background-color: #eee;
  border-radius: 12px;
  border: 2px solid black;
  font-size: 14px;
  margin-bottom: 10px;
`;
export const InventoryFilterOption = styled.option``;

export const InventoryFilterInputDiv = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
`;

export const InventoryFilterInput = styled.input`
  width: 90%;
  height: auto;
  line-height: normal;
  padding: 0.8em 0.8em;
  border: 2px solid black;
  background-color: #eee;
  font-size: 12px;
  border-radius: 12px;
  &:focus {
    outline: none;
  }
  margin-right: 10px;
`;

export const InventoryListDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InventoryItemDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  background-color: #eee;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
  display: flex;
`;

export const InventoryItemImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const InventoryItemInfoDiv = styled.div`
  width: 67%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 10px;
`;

export const InventoryItemInfoInnerDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const InventoryItemQuantityDiv = styled.div`
  color: #4f67ff;
`;

export const ProductDiv = styled.div`
  width: 100%;
  margin: 70px 0;
  display: flex;
  flex-direction: column;
`;

export const ProductListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductTitleDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
  padding: 10px 10px;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const ProductItemInnerDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  font-size: 14px;
`;

export const ProductItemTitle = styled.div`
  flex-basis: 30%;
  padding: 5px;
  background-color: #eee;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  margin-right: 10px;
`;

// Attribute =====================================

export const AttrDiv = styled.div`
  width: 100%;
  margin-top: 70px;
`;

export const AttrListDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AttrAddButton = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 35px;
  box-sizing: border-box;
  background-color: #484848;
  border-radius: 12px;
  line-height: 35px;
  text-align: center;
  font-size: 36px;
  color: white;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
`;

export const AttrInputDiv = styled.div`
  box-sizing: border-box;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 110px;
  background-color: #eee;
  border-radius: 8px;
  padding: 5px 15px;
`;

export const AttrInnerInputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Attrinput = styled.input`
  width: 90%;
  line-height: normal;
  padding: 0.8em 0.8em;
  background-color: white;
  font-size: 12px;
  border-radius: 12px;
  &:focus {
    outline: none;
  }
  margin-bottom: 10px;
`;

export const Attrselect = styled.select`
  width: 68%;
  padding: 0.6em 0.6em;
  background-color: white;
  border-radius: 12px;
  border: 2px solid black;
  font-size: 14px;
`;
export const AttrOption = styled.option``;

export const AttrSelectBtn = styled.div`
  padding: 0.8em 0.8em;
  border: 2px solid black;
  background-color: white;
  border-radius: 12px;
  font-size: 14px;
  width: 65%;
`;

export const AttrTypeListDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  border: 2px solid black;
  box-sizing: border-box;
  padding: 10px 0;
  position: fixed;
`;

export const AttrTypeItemDiv = styled.div`
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
`;

export const AttrInputButton = styled.div`
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

export const AttrItemDiv = styled.div`
  box-sizing: border-box;
  border: 2px solid black;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #eee;
  border-radius: 8px;
  padding: 5px 15px;
  justify-content: space-between;
  margin-bottom: 20px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
`;

export const AttrItemNameDiv = styled.div`
  width: 45%;
`;

export const AttrItemTypeDiv = styled.div`
  width: 45%;
`;

export const AttrItemSettingDiv = styled.div``;
// Upload ========================================

export const UploadPageInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 40px);
  height: auto;
  margin: 70px 0;
`;

export const UploadInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UploadInputInnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 10px 10px;
`;

export const UploadAttrInputInnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 10px 10px;
`;

export const UploadAttrInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Uploadinput = styled.input`
  line-height: normal;
  padding: 0.8em 0.8em;
  border: none;
  background-color: #eee;
  font-size: 14px;
  border-radius: 12px;
  &:focus {
    outline: none;
  }
`;

export const UploadLabel = styled.div`
  width: 30%;
`;

export const Uploadselect = styled.select`
  width: 75%;
  padding: 0.8em 0.8em;
  background-color: #eee;
  border-radius: 12px;
  font-size: 14px;
  border: none;
`;
export const UploadOption = styled.option``;

export const UploadSelectBtn = styled.div`
  padding: 0.8em 0.8em;
  background-color: #eee;
  border-radius: 12px;
  font-size: 14px;
`;

export const UploadAddButton = styled.div`
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  background-color: #484848;
  border-radius: 12px;
  line-height: 35px;
  text-align: center;
  font-size: 24px;
  color: white;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
`;

export const UploadPlaceListDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-radius: 10px;
  border: 2px solid black;
  box-sizing: border-box;
  padding: 10px 0;
  position: fixed;
`;

export const UploadPlaceItemDiv = styled.div`
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
`;

export const UploadInventoryAttrDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 5px 0;
`;

export const UploadInventoryAttrHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 2px solid black;
`;

export const UploadInventoryAttrHeaderBtn = styled.div`
  color: #4f67ff;
  font-size: 12px;
`;

export const UploadAttrValueListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  positon: fixed;
  background-color: #eee;
  border-radius: 12px;
  box-sizing: border-box;
  border: 2px solid black;
  padding: 10px 0;
  margin-top: 5px;
`;

export const UploadAttrValueItemDiv = styled.div`
  padding: 5px 0;
`;

// Upload In ==========================================

export const ProductAddDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
`;

export const ProductAddListDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  border-bottom: 1px solid gray;
  margin: 10px 0;
`;

export const ProductSelectListDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-height: 400px;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  border-bottom: 1px solid gray;
  margin: 10px 0;
`;

export const ProductSelectItemDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  background-color: #eee;
  border-radius: 8px;
  padding: 10px 15px;
  margin: 10px 0;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ProductSelectItemInnerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProductFilterinput = styled.input`
  line-height: normal;
  padding: 0.8em 0.8em;
  border: none;
  background-color: #eee;
  font-size: 14px;
  border-radius: 12px;
  &:focus {
    outline: none;
  }
`;

export const ProductQuantityinput = styled.input`
  width: 20%;
  line-height: normal;
  padding: 0.8em 0.8em;
  border: none;
  background-color: white;
  font-size: 14px;
  border-radius: 12px;
`;

// History

export const HistoryDiv = styled.div`
  width: 100%;
  margin: 70px 0;
`;

export const HistoryListDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HistoryItemDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 125px;
  border-radius: 24px;
  background-color: #eee;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
  margin: 10px 0;
`;

export const HistoryItemHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const HistoryItemContentDiv = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;
`;

export const HistoryItemMemoDiv = styled.div`
  color: #484848;
  font-size: 12px;
`;

export const HistoryItemCircle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 50px;
  ${(props) => {
    if (props.type === "IN") {
      return css`
        background-color: #50a4fa;
      `;
    } else if (props.type === "OUT") {
      return css`
        background-color: #fb6164;
      `;
    } else if (props.type === "ADJUST") {
      return css`
        background-color: #3cb9a0;
      `;
    } else if (props.type === "MOVE") {
      return css`
        background-color: #f5a623;
      `;
    }
  }}
`;

export const HistoryDetailDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HistoryDetailHeaderDiv = styled.div`
  width: 100%;
  display: flex;
  font-size: 18px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const HistoryDetailTimeDiv = styled.div`
  width: 100%;
  font-size: 18px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
export const HistoryDetailMemoDiv = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
  display: flex;
  font-size: 18px;
  align-items: center;
  padding-bottom: 10px;
`;

export const HistoryDetailTag = styled.div`
  background-color: #ddd;
  color: black;
  border-radius: 8px;
  width: 70px;
  text-align: center;
  margin-right: 5px;
  font-size: 14px;
  line-height: 18px;
`;

export const HistoryDetailItemDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  background-color: #eee;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
  display: flex;
`;

export const Historyselect = styled.select`
  width: 100%;
  padding: 0.6em 0.6em;
  background-color: white;
  border-radius: 12px;
  border: 2px solid black;
  font-size: 16px;
`;
export const HistoryOption = styled.option``;

export const Historyinput = styled.input`
  width: 40%;
  line-height: normal;
  padding: 0.8em 0.8em;
  background-color: white;
  font-size: 12px;
  border-radius: 12px;
  border: 2px solid black;
  margin-bottom: 5px;
`;

export const HistoryInputInnerDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin 10px 0;
`;

export const HistorySearchBtn = styled.div`
  background-color: #4f67ff;
  color: white;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 12px;
  margin-bottom: 10px;
`;
// Setting

export const SettingDiv = styled.div`
  width: 100%;
  margin: 70px 0;
`;

export const SettingListDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
