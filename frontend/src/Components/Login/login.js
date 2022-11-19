import React from 'react';
import './login.css';
const Login = () => {
	return (
		<div class="login">
			<div class="login-triangle"></div>

			<h2 class="login-header">Log in</h2>

			<form class="login-container">
				<input
					type="email"
					placeholder="Email"
				/>
				<input
					type="password"
					placeholder="Password"
				/>
				<input
					type="submit"
					value="Log in"
				/>
			</form>
		</div>
	);
};

export default Login;
