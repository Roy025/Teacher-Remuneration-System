import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//Components
import NavbarInside from "./Components/NavbarInside/NavbarInside";
import LandingPage from "./Components/LandingPage/LandingPage";
import FAQ from "./Components/FAQ/FAQ";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import Notifications from "./Components/Notifications/Notifications";
import ChairmanBill from "./Components/TeachersBill/ChairmanBill";
import DirectorsBill from "./Components/TeachersBill/DirectorsBill";
import TeacherBill from "./Components/TeachersBill/TeacherBill";
import ChiefInvigilatorBill from "./Components/TeachersBill/ChiefInvigilatorBill";
import FinalTeacherBill from "./Components/FinalBill/FinalTeacherBill";
import ScrollToTop from "./Functions/ScrollTotop";
import AdminHome from "./Components/Admin/AdminHome";
import CreateAccount from "./Components/Admin/CreateAccount/CreateAccount";
import AddInstitute from "./Components/Admin/AddInstittute/AddInstitute";
import CreateDept from "./Components/Admin/CreateDept/CreateDept";
import Login from "./Components/Login/Login";
import ViewAccount from "./Components/Admin/ViewAccount/ViewAccount";
import UpdateRole from "./Components/Admin/UpdateRole/UpdateRole";
import CreateCourse from "./Components/Admin/CreateCourse/CreateCourse";
import AddStudents from "./Components/Admin/AddStudents/AddStudents";

function App() {
  return (
    <>
      <ScrollToTop />
      <NavbarInside></NavbarInside>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/faq" element={<FAQ />}></Route>
        <Route exact path="/director" element={<DirectorsBill />}></Route>
        <Route
          exact
          path="/committee-chairman"
          element={<ChairmanBill />}
        ></Route>
        <Route exact path="/teacher" element={<TeacherBill />}></Route>
        <Route
          exact
          path="/chief-invigilator"
          element={<ChiefInvigilatorBill />}
        ></Route>
        <Route exact path="/notifications" element={<Notifications />}></Route>
        <Route
          exact
          path="/uncleared_catalogues"
          element={<FinalTeacherBill />}
        ></Route>
        <Route exact path="/profile" element={<ProfilePage />}></Route>
        <Route exact path="/AdminHome" element={<AdminHome />}></Route>
        <Route exact path="/createaccount" element={<CreateAccount />}></Route>
        <Route exact path="/addinstitute" element={<AddInstitute />}></Route>
        <Route exact path="/adddepartment" element={<CreateDept />}></Route>
        <Route exact path="/viewaccounts" element={<ViewAccount />}></Route>
        <Route exact path="/createcourse" element={<CreateCourse />}></Route>
        <Route exact path="/addstudents" element={<AddStudents />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/updaterole" element={<UpdateRole />}></Route>
      </Routes>
    </>
  );
}

export default App;
