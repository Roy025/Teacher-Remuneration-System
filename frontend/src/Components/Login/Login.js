import React, { useState } from 'react';
import './login.css';
import '../ProfilePage/ProfilePage.css';
import { useNavigate } from 'react-router-dom';
import { instance as axios } from '../axios';
import { FaWindows } from 'react-icons/fa';

const Login = () => {
	const [loginData, setloginData] = useState({
		email: '',
		password: '',
	});
	const [checked, setChecked] = useState(false);
	const { email, password } = loginData;

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const navigate = useNavigate();

	const login = async () => {
		if (checked) {
			try {
				await axios
					.post('/Admin/login', {
						email: email,
						password: password,
					})
					.then((response) => {
						console.log(response);
						const obj = response.data;
						console.log(obj.data.token);

						if (response.data.statusCode === 200) {
							setTimeout(() => {
								navigate('/AdminHome');
							}, 3000);
						}
					})
					.catch((err) => {
						console.log(err);
					});
			} catch (err) {
				console.log(err);
			}
		} else {
			try {
				await axios
					.post('/Teacher/login', {
						email: email,
						password: password,
					})
					.then((response) => {
						console.log(response);
						const obj = response.data;
						console.log(obj.data.role);
						console.log(obj.data.token);

						localStorage.setItem('accesstoken', `Bearer ${obj.data.token}`);
						localStorage.setItem('id', obj.data.id);
						localStorage.setItem('role', obj.data.role);
						localStorage.setItem('departmentID', obj.data.departmentId)
						console.log(response.data.statusCode);


						if (response.data.statusCode === 200) {
							setTimeout(() => {
								navigate('/');
								window.location.reload(false);
							}, 3000);
						}
					})
					.catch((err) => {
						console.log(err);
					});
			} catch (err) {
				console.log(err);
			}
		}
	};

	console.log(checked);

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

					<label class="mylabel">
						<input
							type="checkbox"
							className="checkbox"
							checked={checked}
							onChange={() => setChecked(!checked)}
						/>
						<span>Admin</span>
					</label>
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
