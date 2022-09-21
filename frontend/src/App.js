import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

//Components
import NavbarInside from "./Components/NavbarInside/NavbarInside";
import LandingPage from "./Components/LandingPage/LandingPage";
import TeachersBill from "./Components/TeachersBill/TeachersBill"
import FAQ from "./Components/FAQ/FAQ";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import Notifications from "./Components/Notifications/Notifications"

function App() {
  return (
    <>
      <NavbarInside></NavbarInside>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}></Route>
        <Route exact path="/faq" element={<FAQ/>}></Route>
        <Route exact path="/teachersbill" element={<TeachersBill/>}> </Route>
        <Route exact path="/profile" element={<ProfilePage/>}></Route>
        <Route exact path="/notifications" element={<Notifications/>}></Route>
      </Routes>
    </>
  );
}

export default App;
