import React, { useEffect } from 'react';
import './ProfilePage.css';
import { useState } from 'react';
import { instance as axios } from '../axios';
import { useNavigate } from 'react-router-dom';
import { teacher } from '../../Functions/Get';

function ProfilePage() {
	const navigate = useNavigate();
	const [objs, setObjs] = useState([]);
	const [department, setdepartment] = useState([]);
	const [disableButton, setDisableButton] = useState(false);
	const [inputFields, setInputFields] = useState({
		name: '',
		account: '',
		designation: '',
	});
	const handleChange = (evnt) => {
		const { name, value } = evnt.target;
		console.log(name);
		console.log(value);
		const list = { ...inputFields };
		list[name] = value;
		setInputFields(list);
	};

	const teacherToken = teacher();
	const id = teacherToken.teacherID;
	console.log(id);

	useEffect(() => {
		axios
			.get(`/Teacher/${id}`)
			.then((response) => {
				const object = response.data;
				console.log(object);
				console.log(object.data);
				const dept = object.data;
				console.log(dept.department);
				setdepartment(dept.department);
				setObjs(object.data);
			})
			.catch((err) => {
				console.log(err.response);
				console.log(id);
			});
	}, []);
	const { name, account, designation } = inputFields;
	console.log(inputFields);
	console.log(name);

	const update = async () => {
		try {
			await axios
				.patch(`/Teacher/${id}`, {
					name: name,
					bankAccount: account,
					designation: designation,
				})
				.then((response) => {
					setTimeout(() => {
						navigate(`/profile`);
					}, 3000);
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (err) {
			console.log(err);
		}
		window.location.reload(false);
	};

	return (
		<div className="profile">
			<div className="shadow">
				<p className="heading-1">Profile</p>
				<div className="card">
					<div className="containerA">
						<img
							src=""
							alt="Avatar"
							className="profile-image"
						/>
						{/* <h2>{objs.name}</h2> */}

						<div>
							{disableButton ? (
								<input
									className="input"
									type="text"
									name="name"
									value={name}
									// onChange={(evnt) => handleChange(evnt, index)}
									onChange={(evnt) => handleChange(evnt)}
									onKeyDown={(e) => {
										if (e.key === 'Enter') setDisableButton(false);
									}}
								/>
							) : (
								<h4
									className="h4"
									onClick={() => setDisableButton(true)}>
									{objs.name}
								</h4>
							)}{' '}
							<i className="far fa-edit mb-5 editbtn"></i>
						</div>
					</div>
					<div className="containerB">
						<div>
							<p className="para">Email</p>
							<h4 className="h4">{objs.email}</h4>
						</div>
						<div>
							<p className="para">Bank Account</p>
							<div className="edit">
								{disableButton ? (
									<input
										className="input"
										type="text"
										name="account"
										value={account}
										onChange={(evnt) => handleChange(evnt)}
										onKeyDown={(e) => {
											if (e.key === 'Enter') setDisableButton(false);
										}}
									/>
								) : (
									<h4
										className="h4"
										onClick={() => setDisableButton(true)}>
										{objs.bankAccount}
									</h4>
								)}
								<i className="far fa-edit mb-5 editbtn"></i>
							</div>
						</div>
						<div>
							<p className="para">Designation</p>

							<div className="edit">
								{disableButton ? (
									<input
										className="input"
										type="text"
										name="designation"
										value={designation}
										onChange={(evnt) => handleChange(evnt)}
										onKeyDown={(e) => {
											if (e.key === 'Enter') setDisableButton(false);
										}}
									/>
								) : (
									<h4
										className="h4"
										onClick={() => setDisableButton(true)}>
										{objs.designation}
									</h4>
								)}
								<i className="far fa-edit mb-5 editbtn"></i>
							</div>
						</div>
						<div>
							<p className="para">Department</p>
							<h4 className="h4">{department.name}</h4>
						</div>
						<div>
							<p className="para">Institute</p>
							<h4 className="h4">SUSt</h4>
							{/* <h4 className="h4">{department.institute}</h4> */}
						</div>
						<div>
							{disableButton ? (
								<button
									type="submit"
									className="submitButton"
									onClick={update}>
									Update
								</button>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
