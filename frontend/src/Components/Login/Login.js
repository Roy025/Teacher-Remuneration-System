import React, { useState } from 'react';
import './login.css';
import '../ProfilePage/ProfilePage.css';
const Login = () => {
	const [loginData, setloginData] = useState({
		email: '',
		password: '',
	});
	const { email, password } = loginData;

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const login = async () => {
		console.log(loginData);
	};

	const handleChange = (e) => {
		const log = e.target.name;
		setloginData({ ...loginData, [log]: e.target.value });
	};
	return (
		<div class="login-page">
			<div class="form">
				<h1 className="heading">Login</h1>

				<form
					className="login-page"
					onSubmit={handleSubmit}>
					<input
						className="input"
						id="email"
						name="email"
						type="email"
						placeholder="E-mail"
						onChange={handleChange}
					/>
					<input
						className="input"
						id="password"
						name="password"
						type="password"
						placeholder="Password"
						onChange={handleChange}
					/>
					<button
						type="submit"
						onClick={login}>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};
export default Login;
