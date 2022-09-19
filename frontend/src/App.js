import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarInside from "./Components/NavbarInside/NavbarInside";
import TeachersBill from './Components/TeachersBill/TeachersBill';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <NavbarInside></NavbarInside>
      <Routes>
      </Routes>
	  <TeachersBill/>
    </Router>
	
  );
}

export default App;
