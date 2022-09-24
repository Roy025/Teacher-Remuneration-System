import React, { useState } from 'react';
import TeacherBill from './TeacherBill';

export const Additions = ({ inputFields, defaultInput, setInputFields }) => {
	console.log(inputFields);

	const addInputField = (e) => {
		e.preventDefault();
		const clone = Object.assign({}, defaultInput);

		setInputFields([...inputFields, clone]);
	};

	return (
		<button
			className="btn-outline-success add"
			onClick={addInputField}
			type="button">
			<i className="fa-sharp fa-solid fa-plus"></i>
		</button>
	);
};
export const Chairman = ({ inputFields, handleChange, removeInputFields }) => {
	return (
		<div className="chairman">
			{inputFields.map((data, index) => {
				console.log(data);
				const { institute, department, member } = data;
				return (
					<div
						className="row"
						key={index}>
						<div className="form-group col-md-3">
							<label>Institute</label>
							<input
								type="text"
								name="institute"
								onChange={(evnt) => handleChange(index, evnt)}
								value={institute}
								className="form-control"
								id="institute"
								placeholder="Institute"
							/>
						</div>
						<div className="form-group col-md-3">
							<label>Department</label>
							<input
								type="text"
								name="department"
								onChange={(evnt) => handleChange(index, evnt)}
								value={department}
								className="form-control"
								id="department"
								placeholder="Department"
							/>
						</div>
						<div className="form-group col-md-4">
							<label>Member</label>
							<input
								type="text"
								name="member"
								onChange={(evnt) => handleChange(index, evnt)}
								value={member}
								className="form-control"
								id="member"
								placeholder="Member"
							/>
						</div>
						<div className="col-md-1 text-center mt-3">
							{inputFields.length !== 1 ? (
								<button
									className="btn-outline-danger add"
									onClick={removeInputFields}>
									x
								</button>
							) : (
								''
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export const Chief = ({ inputFields, handleChange, removeInputFields }) => {
	<div className="Awwwww">
		<Chairman
			inputFields={inputFields}
			handleChange={handleChange}
			removeInputFields={removeInputFields}
		/>
		<TeacherBill />
	</div>;
};
