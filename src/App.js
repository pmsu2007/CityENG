import "./App.css";
import { MainPageDiv } from "./styledComponents";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Home from "./components/templates/Home";
import Inventory from "./components/templates/Inventory";

function App() {
  return (
    <div className="font-style">
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="home" element={<Home />} />
            <Route path="inventory" element={<Inventory />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
