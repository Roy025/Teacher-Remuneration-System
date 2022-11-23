import React from 'react';
import { Items } from './NavbarInsideItems';
import './NavbarInside.css';
import { Link, useNavigate } from 'react-router-dom';

import GetRole from '../../Functions/GetRole';
function NavbarInside() {
	const teacherToken = localStorage.getItem('id');
	const role = GetRole();
	const navigate = useNavigate();
	const logOut = () => {
		localStorage.removeItem('role');
		localStorage.removeItem('accesstoken');
		localStorage.removeItem('id');
		localStorage.removeItem('departmentID');
		console.log('Logged Out');
	};
	return (
		<nav className="navbar navbar-expand-lg  NavbarItems">
			<h1 className="navbar-brand text-light navbar-logo">
				<Link
					to="/home"
					className="nav-links home">
					Teacher Remuneration
					<span className="material-symbols-outlined">payments</span>
				</Link>
			</h1>
			{role === 'Admin' ? (
				<Link
					to="/"
					className="nav-links logout ad"
					onClick={logOut}>
					Logout
				</Link>
			) : (
				''
			)}
			{teacherToken ? (
				<>
					<ul className="nav-menu">
						{Items.map((item, index) => {
							return (
								<li key={index}>
									<Link
										to={item.url}
										className={item.cName}>
										{item.title}
									</Link>
								</li>
							);
						})}
					</ul>
					<Link
						to="/"
						className="nav-links logout"
						onClick={logOut}>
						Logout
					</Link>
				</>
			) : (
				''
			)}
		</nav>
	);
}

export default NavbarInside;
