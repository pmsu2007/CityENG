import styled from "styled-components";

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
  margin: 20px 0;
`;
export const InventoryFilterDiv = styled.div`
  display: flex;
  flex-direction: column;
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
  border: none;
  background-color: #eee;
  font-size: 12px;
  border-radius: 12px;
  &:focus {
    outline: none;
  }
  margin-right: 10px;
`;

// Upload ========================================

export const UploadPageInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 40px);
  height: auto;
  margin: 70px 0;
`;

// == Inventory

export const UploadInventoryInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UploadInventoryInputInnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 10px 10px;
`;

export const UploadInventoryInput = styled.input`
  width: 60%;
  height: auto;
  line-height: normal;
  padding: 0.8em 0.8em;
  border: none;
  background-color: #eee;
  font-size: 12px;
  border-radius: 12px;
  &:focus {
    outline: none;
  }
`;

export const UploadInventoryLabel = styled.label``;
