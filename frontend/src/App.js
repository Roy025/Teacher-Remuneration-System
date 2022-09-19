import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarInside } from "./Components/NavbarInside/NavbarInside";
import TeachersBill from './Components/TeachersBill/TeachersBill';

function App() {
	return (
		<div className="App">
			<NavbarInside></NavbarInside>
			<TeachersBill/>
		</div>
	);
}

export default App;
