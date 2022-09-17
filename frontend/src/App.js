import React from "react";
import "./App.css";
import NavbarInside from "./Components/NavbarInside/NavbarInside";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <NavbarInside></NavbarInside>
      <Routes>
      </Routes>
    </Router>
  );
}

export default App;
