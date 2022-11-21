import React from 'react';
import './ProfilePage.css';
import DatePicker from 'sassy-datepicker';
import { useState } from 'react';

function ProfilePage() {
	const [date, setDate] = useState(new Date());

	const [disableButton, setDisableButton] = useState(false);
	const [disableButton1, setDisableButton1] = useState(false);
	const [inputFields, setInputFields] = useState([
		{
			account: '23456',
			designation: 'sdfghj',
		},
	]);
	const handleChange = (evnt, index) => {
		const { name, value } = evnt.target;
		console.log(name);
		console.log(value);
		const list = [...inputFields];
		list[index][name] = value;
		setInputFields(list);
	};

	return (
		<div className="profile">
			{inputFields.map((data, index) => {
				const { account, designation } = data;
				return (
					<div className="shadow">
						<h1 className="heading-1">Profile</h1>
						<div className="card">
							<div className="containerA">
								<img
									src="https://hitechwindows.ca/wp-content/uploads/2016/03/funny-animals-licking-glass-11__700.jpg"
									alt="Avatar"
									className="profile-image"
								/>
								<h2>Mr. AHsan Habib</h2>
							</div>
							<div className="containerB">
								<div>
									<p className="para">Email</p>
									<h4 className="h4">asdfgh@gmail.com</h4>
								</div>
								<div>
									<div className="edit">
										<p className="para">Bank Account</p>
										<i className="far fa-edit mb-5 editbtn"></i>
									</div>
									{disableButton1 ? (
										<input
											className="input"
											type="text"
											name="account"
											value={account}
											onChange={(evnt) => handleChange(evnt, index)}
											onKeyDown={(e) => {
												if (e.key === 'Enter') setDisableButton1(false);
											}}
										/>
									) : (
										<h4
											className="h4"
											onClick={() => setDisableButton1(true)}>
											{account}
										</h4>
									)}{' '}
								</div>
								<div>
									<div className="edit">
										<p className="para">Designation</p>
										<i className="far fa-edit mb-5 editbtn"></i>
									</div>
									{disableButton ? (
										<input
											className="input"
											type="text"
											name="designation"
											value={designation}
											onChange={(evnt) => handleChange(evnt, index)}
											onKeyDown={(e) => {
												if (e.key === 'Enter') setDisableButton(false);
											}}
										/>
									) : (
										<h4
											className="h4"
											onClick={() => setDisableButton(true)}>
											{designation}
										</h4>
									)}{' '}
								</div>
								<div>
									<p className="para">Department</p>
									<h4 className="h4">SWE</h4>
								</div>
								<div>
									<p className="para">Institute</p>
									<h4 className="h4">SUST</h4>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ProfilePage;
