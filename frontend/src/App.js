import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

//Components
import NavbarInside from "./Components/NavbarInside/NavbarInside";
import LandingPage from "./Components/LandingPage/LandingPage";
import FAQ from "./Components/FAQ/FAQ";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import Notifications from "./Components/Notifications/Notifications";
import ChairmanBill from "./Components/TeachersBill/ChairmanBill";
import DirectorsBill from "./Components/TeachersBill/DirectorsBill";
import TeacherBill from "./Components/TeachersBill/TeacherBill"
import ChiefInvigilatorForm from "./Components/TeachersBill/ChiefInvigilatorForm";

function App() {
	return (
		<>
			<NavbarInside></NavbarInside>
			<Routes>
				<Route
					exact
					path="/"
					element={<LandingPage />}></Route>
				<Route
					exact
					path="/faq"
					element={<FAQ />}></Route>
				<Route
					exact
					path="/director"
					element={<DirectorsBill />}>
					{' '}
				</Route>
				<Route
					exact
					path="/committee-chairman"
					element={<ChairmanBill />}>
					{' '}
				</Route>
				<Route
					exact
					path="/teacher"
					element={<TeacherBill />}>
					{' '}
				</Route>
        <Route
          exact
          path="/chief-invigilator"
          element={<ChiefInvigilatorForm />}
        ></Route>
				<Route
					exact
					path="/notifications"
					element={<Notifications />}></Route>
				<Route
					exact
					path="/profile"
					element={<ProfilePage />}></Route>
			</Routes>
		</>
	);
}

export default App;
