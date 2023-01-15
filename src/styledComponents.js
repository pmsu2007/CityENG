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
  margin-top: 70px;
`;
// Entry =======================================
export const EntryDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EntryLogoImg = styled.img`
  width: 300px;
  height: 300px;
`;

// Login =======================================

export const LoginDiv = styled.div``;

// Header ======================================

export const HeaderDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  position: fixed;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
`;

export const HeaderTitle = styled.div`
  font-weight: 700;
`;

// Navigation ===================================

export const NavigationListDiv = styled.div`
  box-sizing: border-box;
  width: 100%px;
  height: 50px;
  position: fixed;
  padding: 10px 15px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eee;
`;

export const NavigationBtnDiv = styled.div`
  box-sizing: border-box;
  width: calc(100% / 4);
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Home ==========================================

// == DailyInventory

export const DailyInventoryDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  border-radius: 10px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 10px;
  margin-bottom: 20px;
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

// == InventorySearch

export const InventorySearchDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: #eee;
  display: flex;
  margin-bottom: 20px;
`;

export const InventorySearchInput = styled.input``;
export const InventorySearchLabel = styled.label``;
