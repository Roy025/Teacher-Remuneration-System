import React, { useState } from 'react';
import Links from './Links';
import './TeachersBill.css';
import Dropdown, {
	semesterOptions,
	semesterTitle,
	sessionTitle,
	sessionOptions,
} from '../SampleDropdown/Dropdown';
import '../SampleDropdown/styles.css';
const DirectorsBill = () => {
	const [inputFields, setInputFields] = useState([
		{ institute: '', department: '', member: '' },
	]);
	const addFields = () => {
		let newfield = { institute: '', department: '', member: '' };
		setInputFields([...inputFields, newfield]);
	};

	return (
		<>
			<div className="row">
				<Links />
				<form className="col-md-9">
					<h1 className="text-center">Directors Bill</h1>
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
							/>
						</div>
						<div class="form-group col-md-3">
							<label for="exampleFormControlInput1">Department</label>
							<input
								name="department"
								type="text"
								class="form-control"
								id="department"
							/>
						</div>
						<div class="form-group col-md-4">
							<label for="exampleFormControlInput1">Member</label>
							<input
								name="member"
								type="text"
								class="form-control"
								id="member"
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
