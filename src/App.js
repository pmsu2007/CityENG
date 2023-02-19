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
            
            {/* 제품 페이지 */}
            <Route path="inventory" element={<Inventory />} />
            
            {/* 위치 페이지 */}
            <Route path="places" element={<Place />} />
          </Route>

          {/* 등록 페이지 */}
          <Route path="upload" element={<ShowUpload />}>
            <Route path="inventory" element={<UploadInventory />} />
            <Route path="in" element={<UploadIn />} />
            <Route path="out" element />
            <Route path="move" element />
            <Route path="adjust" element />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
