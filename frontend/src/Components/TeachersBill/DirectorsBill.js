import React, { useState } from 'react';
import Links from './Links';
import './TeachersBill.css';
import Dropdown from '../SampleDropdown/Dropdown';
import '../SampleDropdown/styles.css';

const DirectorsBill = () => {
	const sessionTitle = 'Session';
	const sessionOptions = [
		'2016-17',
		'2017-18',
		'2018-19',
		'2019-20',
		'2020-21',
	];
	const semesterTitle = 'Semester';
	const semesterOptions = [
		'1st',
		'2nd',
		'3rd',
		'4th',
		'5th',
		'6th',
		'7th',
		'8th',
	];
	const [inputFields, setInputFields] = useState([
		{ institute: '', department: '', member: '' },
	]);
	const addFields = () => {
		let newfield = { institute: '', department: '', member: '' };
		setInputFields([...inputFields, newfield]);
	};
	const handleFormChange = (index, event) => {
		let data = [...inputFields];
		data[index][event.target.institute] = event.target.institute;
		data[index][event.target.department] = event.target.department;
		data[index][event.target.member] = event.target.member;
		setInputFields(data);
	};
	return (
		<>
			<div className="row">
				<Links />
				<form className="col-md-8">
					<div className="row">
						<div class="form-group col-md-5">
							<Dropdown
								options={semesterOptions}
								dropdownTitle={semesterTitle}
							/>
						</div>
						<div class="form-group col-md-5">
							<Dropdown
								options={sessionOptions}
								dropdownTitle={sessionTitle}
							/>
						</div>
					</div>
					<div class="form-group">
						<label for="exampleFormControlInput1">Committe Chairman</label>
						<input
							type="text"
							class="form-control"
							id="exampleFormControlInput1"
							placeholder="Name"
						/>
					</div>
					<div class="form-group">
						<label for="exampleFormControlInput1">Chief Invigilator</label>
						<input
							type="text"
							class="form-control"
							id="exampleFormControlInput1"
							placeholder="Name"
						/>
					</div>
					{/* {inputFields.map((input, index) => { */}
					<div
						className="row"
						// key={index}
					>
						<div class="form-group col-md-4">
							<label for="exampleFormControlInput1">Institute</label>
							<input
								name="institute"
								type="text"
								class="form-control"
								id="institute"
								// value={institute}
								// onChange={(event) => handleFormChange( event)}
							/>
						</div>
						<div class="form-group col-md-3">
							<label for="exampleFormControlInput1">Department</label>
							<input
								name="department"
								type="text"
								class="form-control"
								id="department"
								// value={input.department}
								// onChange={(event) => handleFormChange(index, event)}
							/>
						</div>
						<div class="form-group col-md-4">
							<label for="exampleFormControlInput1">Member</label>
							<input
								name="member"
								type="text"
								class="form-control"
								id="member"
								// value={input.member}
								//onChange={(event) => handleFormChange(index, event)}
							/>
						</div>
						<div class="col-md-1">
							<button
								type="button"
								class="add"
								onClick={addFields}>
								<i class="fa-sharp fa-solid fa-plus"></i>
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default DirectorsBill;
