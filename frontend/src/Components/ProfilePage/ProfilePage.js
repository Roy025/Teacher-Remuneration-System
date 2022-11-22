import React, { useEffect } from 'react';
import './ProfilePage.css';
import { useState } from 'react';
import { instance as axios } from '../axios';

function ProfilePage() {
	const [objs, setObjs] = useState([]);
	const [disableButton, setDisableButton] = useState(false);
	const [disableButton1, setDisableButton1] = useState(false);
	const [inputFields, setInputFields] = useState([
		{
			account: '',
			designation: '',
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
	// const { id } = useParams();
	const id = "d006c9f0-e5df-4604-afd5-b74e57655e09";
	useEffect(() => {
		axios
			.get(`/Teacher/${id}`)
			.then((response) => {
				const object = response.data;
				console.log(object);				
				setObjs(object.data);		
			})
			.catch((err) => {
				console.log(err.response)
				console.log(id);
			}
			);
	}, []);
	console.log(objs);
	
	return (
		<div className="profile">
			{inputFields.map((data, index) => {
				const { account, designation } = data;
				return (
					<div className="shadow">
						<p className="heading-1">Profile</p>
						<div className="card">
							<div className="containerA">
								<img
									src="https://hitechwindows.ca/wp-content/uploads/2016/03/funny-animals-licking-glass-11__700.jpg"
									alt="Avatar"
									className="profile-image"
								/>
								<h2>{objs.name}</h2>
							</div>
							<div className="containerB">
								<div>
									<p className="para">Email</p>
									<h4 className="h4">{objs.email}</h4>
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
											{objs.designation}
										</h4>
									)}{' '}
								</div>
								<div>
									<p className="para">Department</p>
									<h4 className="h4">{objs.department}</h4>
								</div>
								<div>
									<p className="para">Institute</p>
									<h4 className="h4">SUSt</h4>
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
