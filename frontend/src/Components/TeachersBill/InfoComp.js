import React, { useState } from 'react';

export const Additions = ({ inputFields }) => {
	// const [inputField, setInputField] = useState([inputFields]);
	// console.log(inputField);
	// const addInputField = (e) => {
	// 	e.preventDefault();
	// 	setInputField([
	// 		...inputField,
	// 		{
	// 			[e.target.name]: '',
	// 		},
	// 	]);
	// 	console.log(inputField[0].inputFields[0]);
	// };
	// return (
	// 	<button
	// 		className="btn-outline-success add"
	// 		onClick={addInputField}
	// 		type="button">
	// 		<i className="fa-sharp fa-solid fa-plus"></i>
	// 	</button>
	// );
};
const InfoComp = () => {
	return (
		<div className="row">
			<div className="form-group col-md-3">
				<label>Institute</label>
				<input
					name="institute"
					type="text"
					className="form-control"
					id="institute"
				/>
			</div>
			<div className="form-group col-md-3">
				<label>Department</label>
				<input
					name="department"
					type="text"
					className="form-control"
					id="department"
				/>
			</div>
			<div className="form-group col-md-3">
				<label>Teacher Name</label>
				<input
					name="name"
					type="text"
					className="form-control"
					id="name"
				/>
			</div>
			<div className="form-group col-md-2">
				<label>CourseID</label>
				<input
					name="course"
					type="text"
					className="form-control"
					id="course"
				/>
			</div>
			<div className="col-md-1">
				<button
					type="button"
					className="add"
					//onClick={addFields}
				>
					<i className="fa-sharp fa-solid fa-plus"></i>
				</button>
			</div>
		</div>
	);
};

export default InfoComp;
