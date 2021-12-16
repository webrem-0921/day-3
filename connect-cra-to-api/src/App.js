import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ApartmentsPage from "./pages/ApartmentsList/ApartmentsList";
import AddApartmentPage from "./pages/AddApartmentPage/AddApartmentPage";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<ApartmentsPage />} />
        <Route path="/apartments/new" element={<AddApartmentPage />} />
      </Routes>
    </div>
  );
}

export default App;
