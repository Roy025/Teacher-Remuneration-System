import React, { useState } from 'react';
import '../Components/SampleDropdown/styles.css';

const ThreeFields = ({ inputFields, setInputFields }) => {
	const removeInputFields = (e, index) => {
		e.preventDefault();
		const rows = [...inputFields];
		rows.splice(index, 1);
		setInputFields(rows);
	};
	const handleChange = (evnt, index) => {
		const { name, value } = evnt.target;
		const list = [...inputFields];
		list[index][name] = value;
		setInputFields(list);
	};
	const addInputField = () => {
		setInputFields([
			...inputFields,
			{
				institute: '',
				department: '',
				name: '',
			},
		]);
	};
	return (
		<div className="container">
			{inputFields.map((data, index) => {
				const { institute, department, name } = data;
				return (
					<div
						className="row"
						key={index}>
						<div className="form-group col-md-3">
							{index === 0 ? <label>Institute</label> : ''}
							<input
								type="text"
								name="institute"
								onChange={(evnt) => handleChange(evnt, index)}
								value={institute}
								className="form-control"
								placeholder="Institute"
							/>
						</div>
						<div className="form-group col-md-3">
							{index === 0 ? <label>Department</label> : ''}
							<input
								type="text"
								name="department"
								onChange={(evnt) => handleChange(evnt, index)}
								value={department}
								className="form-control"
								placeholder="Department"
							/>
						</div>
						<div className="form-group col-md-3">
							{index === 0 ? <label>Teacher's Name</label> : ''}
							<input
								type="text"
								name="name"
								onChange={(evnt) => handleChange(evnt, index)}
								value={name}
								className="form-control"
								placeholder="Name"
							/>
						</div>
						<div className="col-md-1 text-center mt-1">
							{inputFields.length !== 1 ? (
								<button
									className="btn-outline-danger add"
									onClick={(evnt) => removeInputFields(evnt, index)}>
									x
								</button>
							) : (
								''
							)}
						</div>
						{inputFields.length - 1 === index && (
							<div className="row">
								<div className="col-sm-1">
									<button
										className="btn-outline-success add"
										onClick={() => addInputField()}
										type="button">
										<i className="fa-sharp fa-solid fa-plus"></i>
									</button>
								</div>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default ThreeFields;
