import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ShowHouses from "./pages/Home/ShowHouses";
import AddNewHouse from "./pages/Home/AddNewHouse";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/house" element={<ShowHouses />} />
      <Route path="/newHouse" element={<AddNewHouse />} />
    </Routes>
  </BrowserRouter>
);
