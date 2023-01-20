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
  margin: 70px 0;
`;

// Common ======================================

export const HorizontalLine = styled.hr`
  width: 90%;
  maring-bottom: 30px;
`


// Entry =======================================
export const EntryDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EntryLogoImg = styled.img`
  width: 270px;
  height: 270px;
`;

// Account =======================================

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
`

export const LoginInput = styled.input`
  width: 55%;
  height: auto;
  line-height: normal;
  padding: .8em .5em;
  border: none;
  background-color: #eee;
  font-size: 14px;
  border-radius: 24px;
  &:focus {
    outline: none;
  }
`

export const LoginLabel = styled.label`
  font-size: 14px;
  width: 55px;
`

export const LoginButton = styled.div`
  width: 40%;
  text-align: center;
  background-color: #484848;
  color: white;
  font-size: 14px;
  border-radius: 24px;
  border:3px solid #484848;
  padding: 10px 0;
  transition: 0.5s;

  &:hover {
    color: black;
    background-color: white;
  }

  margin-bottom: 10px;
`

export const RegisterButton = styled.div`
  font-size: 14px;
  text-decoration: underline;
`


// Header ======================================

export const HeaderDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  position: fixed;
  padding: 15px 20px;
  border-bottom: 2px solid black;
  background-color: white;
  z-index: 10;
`;

export const HeaderTitle = styled.div`
  font-weight: 700;
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
  z-index: 10;
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
  border: 2px solid black;
  border-radius: 10px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

export const InventorySearchInput = styled.input`
  width: 75%;
  height: auto;
  line-height: normal;
  padding: .8em .8em;
  border: none;
  background-color: white;
  font-size: 14px;
  border-radius: 24px;
  &:focus {
    outline: none;
  }
`;
export const InventorySearchLabel = styled.label``;

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
`

export const HomeMenuIcon = styled.div`
  width: 35px;
  text-align: center;
`

export const HomeMenuText = styled.div`
  margin-left: 20px;
`