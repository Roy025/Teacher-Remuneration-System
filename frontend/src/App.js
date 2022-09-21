import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarInside from "./Components/NavbarInside/NavbarInside";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import FAQ from "./Components/FAQ/FAQ";

function App() {
  return (
    <>
      <NavbarInside></NavbarInside>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/faq" element={<FAQ/>}></Route>
      </Routes>
    </>
  );
}

export default App;
