import React, { useState } from 'react';
import DropdownNoTitleTeacher from '../../../Functions/DropdownNoTitleTeacher';
import { useMutation, useQuery } from '@tanstack/react-query';
import { instance as axios } from '../../axios';
import './CreateAccount.css';

const CreateAccount = () => {
	// Store things
	const [instituteList, setInstituteList] = useState([]);
	const [deptList, setDeptList] = useState([]);
	const [selectedInstitute, setSelectedInstitute] = useState('');
	const [selectedDept, setSelectedDept] = useState('');
	const [insTituteAvailable, setInsTituteAvailable] = useState(false);
	const [data, setData] = useState({
		id: '',
		institute: '',
		department: '',
		members: [
			{
				name: '',
				email: '',
				password: '',
				departmentId: '',
			},
		],
	});

	//Fetching institute data
	const fetchInstitute = async () => {
		const response = await axios.get('/institute');
		return response;
	};

	useQuery(['institution-list'], async () => {
		const store = await fetchInstitute();
		setInstituteList(store.data.data);
		return store;
	});

	//Fetching department data

	const fetchDept = async (id) => {
		const response = await axios.get(`/department?institute=${id}`);
		console.log(response);
		setDeptList(response.data.data);
		return response;
	};

	useQuery(['dept-list', data.id], () => fetchDept(data.id), {
		enabled: !!insTituteAvailable,
	});

	// Handle institute data

	const handleInstitute = (propName, option) => {
		const newData = { ...data };
		newData.institute = option;
		newData.id = option.id;
		setInsTituteAvailable(true);
		setData(newData);
	};

	// Handle department data

	const handleDepartment = (propName, option) => {
		const newData = { ...data };
		newData.department = option;
		newData.id = option.id;
		setData(newData);
	};

	// handle member data

	const handlememberid = (e, index) => {
		const { name, value } = e.target;
		const newData = { ...data };
		newData.members[index].email = value;
		setData(newData);
	};

	const handlememberpass = (e, index) => {
		const { name, value } = e.target;
		const newData = { ...data };
		newData.members[index].password = value;
		newData.members[index].departmentId = data.id;
		setData(newData);
	};
	const handlemembername = (e, index) => {
		const { name, value } = e.target;
		const newData = { ...data };
		newData.members[index].name = value;
		newData.members[index].departmentId = data.id;
		setData(newData);
	};

	// Adding new teacher

	const addTeacher = async (info) => {
		console.log(info.teachers);
		const response = await axios.post('/Admin/teacher/register', info.teachers);
		return response;
	};

	const {
		mutate: TeacherMutate,
		isError,
		error,
	} = useMutation(addTeacher, {
		onSuccess: (success) => {
			console.log(success);
			window.location.reload(false);
		},
	});
	if (isError) {
		console.log(error);
	}

	const addMembers = () => {
		const newData = { ...data };
		newData.members.push({
			id: '',
			password: '',
		});
		setData(newData);
	};

	const deleteMembers = (index) => {
		const newData = { ...data };
		newData.members.splice(index, 1);
		setData(newData);
	};

	return (
		<div className="AccountWrap">
			<div className="AccountContainer">
				<h1 className="AccountHeader">Create Accounts</h1>
				<div className="AccountInputFields">
					<label className="AccountLabel">Institute</label>
					<DropdownNoTitleTeacher
						options={instituteList}
						propName="institute"
						handleData={handleInstitute}
						selected={selectedInstitute}
						setSelected={setSelectedInstitute}
					/>
				</div>
				<div className="AccountInputFields">
					<label className="AccountLabel">Department</label>
					<DropdownNoTitleTeacher
						options={deptList}
						propName="department"
						handleData={handleDepartment}
						selected={selectedDept}
						setSelected={setSelectedDept}
					/>
				</div>

				{data.members.map((info, index) => {
					return (
						<div className="InsedAccountWrap">
							<div
								className="InsideAccountContainer"
								key={index}>
								<div className="AccountInputFields">
									{index === 0 && (
										<label className="AccountLabel">Teacher Name</label>
									)}
									<input
										type="text"
										name="name"
										onChange={(evnt) => handlemembername(evnt, index)}
										value={data.members.name}
										className="AccountInput"
										placeholder="Name"
									/>
								</div>
								<div className="AccountInputFields">
									{index === 0 && (
										<label className="AccountLabel">Teacher Email</label>
									)}
									<input
										type="text"
										name="email"
										onChange={(evnt) => handlememberid(evnt, index)}
										value={data.members.email}
										className="AccountInput"
										placeholder="Email"
									/>
								</div>
								<div className="AccountInputFields">
									{index === 0 && (
										<label className="AccountLabel">Password</label>
									)}
									<input
										type="text"
										name="password"
										onChange={(evnt) => handlememberpass(evnt, index)}
										value={data.members.password}
										className="AccountInput"
										placeholder="password"
									/>
								</div>
							</div>

							{data.members.length !== 1 && (
								<button
									className="AdminButton"
									onClick={() => deleteMembers(index)}>
									Remove
								</button>
							)}
							<div className="InsideAccountContainer">
								{index === data.members.length - 1 && (
									<button
										className="AdminButton"
										onClick={() => addMembers()}>
										Add
									</button>
								)}
							</div>
						</div>
					);
				})}
				<button
					className="AdminButton AdminSubmit"
					onClick={() =>
						TeacherMutate({
							teachers: data.members,
						})
					}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default CreateAccount;
