import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarOutside from './Components/NavbarOutside/NavbarOutside';
import TeachersBill from './Components/TeachersBill/TeachersBill';

function App() {
	return (
		<div className="App">
			<NavbarOutside></NavbarOutside>
			<TeachersBill />
		</div>
	);
}

export default App;
