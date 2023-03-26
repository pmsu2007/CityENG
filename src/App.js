import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Home from "./components/templates/Home";
import Inventory from "./components/templates/Inventory";
import ShowUpload from "./pages/ShowUpload";
import ShowMain from "./pages/ShowMain";
import UploadInventory from "./components/templates/UploadInventory";
import UploadIn from "./components/templates/UploadIn";
import Register from "./components/templates/Register";
import TeamSelect from "./components/templates/TeamSelect";
import Place from "./components/templates/Place";
import Attribute from "./components/templates/Attribute";
import ProductDetail from "./components/templates/ProductDetail";
import UploadOut from "./components/templates/UploadOut";
import UploadMove from "./components/templates/UploadMove";
import UploadAdjust from "./components/templates/UploadAdjust";
import History from "./components/templates/History";
import HistoryDetail from "./components/templates/HistoryDetail";
import Setting from "./components/templates/Setting";
import SettingRole from "./components/templates/SettingRole";

function App() {
  return (
    <div className="font-style">
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="register" element={<Register />} />
          <Route path="teams" element={<TeamSelect />} />
          <Route path="team/:team_id" element={<ShowMain />}>
            {/* 홈 페이지 */}
            <Route path="home" element={<Home />} />

            {/* 제품 목록 페이지 */}
            <Route path="inventory" element={<Inventory />} />

            {/* 제품 상세 페이지 */}
            <Route path="inventory/:product_id" element={<ProductDetail />} />

            {/* 위치 페이지 */}
            <Route path="places" element={<Place />} />

            {/* 속성 페이지 */}
            <Route path="attrs" element={<Attribute />} />

            {/* 히스토리 목록 페이지 */}
            <Route path="history" element={<History />} />

            {/* 히스토리 상세 페이지 */}
            <Route path="history/:product_id" element={<HistoryDetail />} />

            {/* 설정 목록 페이지 */}
            <Route path="setting" element={<Setting />} />
            
            {/* 역할 관리 페이지 */}
            <Route path="setting/role" element={<SettingRole />} />
        
          </Route>

          {/* 등록 페이지 */}
          <Route path="upload/:team_id" element={<ShowUpload />}>
            <Route path="inventory" element={<UploadInventory />} />
            <Route path="in" element={<UploadIn type="IN" />} />
            <Route path="out" element={<UploadOut type="OUT" />} />
            <Route path="move" element={<UploadMove type="MOVE" />} />
            <Route path="adjust" element={<UploadAdjust type="ADJUST" />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
