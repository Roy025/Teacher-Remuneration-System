import React from 'react';
import { Items } from './NavbarInsideItems';
import './NavbarInside.css';
import { Link } from 'react-router-dom';
import { teacher } from '../../Functions/Get';
import { useNavigate } from 'react-router-dom';
function NavbarInside() {
	const teacherToken = teacher();
	const logOut = () => {
		localStorage.removeItem('teacher');
		console.log('Logged Out');
	};
	return (
		<nav className="navbar navbar-expand-lg  NavbarItems">
			<h1 className="navbar-brand text-light navbar-logo">
				<Link
					to="/"
					className="nav-links home">
					Teacher Remuneration
					<span className="material-symbols-outlined">payments</span>
				</Link>
			</h1>
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
						to="/login"
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
