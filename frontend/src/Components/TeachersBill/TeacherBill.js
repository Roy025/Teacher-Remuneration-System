import React, { useState } from 'react';
import '../SampleDropdown/styles.css';

const TeacherBill = () => {
	const [inputFields, setInputFields] = useState([
		{
			institute: '',
			department: '',
			name: '',
			course: '',
		},
	]);

	const addInputField = (e) => {
		e.preventDefault();
		setInputFields([
			...inputFields,
			{
				institute: '',
				department: '',
				name: '',
				course: '',
			},
		]);
	};
	const removeInputFields = (index, e) => {
		e.preventDefault();
		const rows = [...inputFields];
		rows.splice(index, 1);
		setInputFields(rows);
	};
	const handleChange = (index, evnt) => {
		const { name, value } = evnt.target;
		const list = [...inputFields];
		list[index][name] = value;
		setInputFields(list);
	};
	return (
		<div className="container">
			{inputFields.map((data, index) => {
				const { institute, department, name, course } = data;
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
						<div claRequestssName="form-group col-md-3">
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
						<div className="form-group col-md-3">
							<label>Teacher Name</label>
							<input
								type="text"
								name="name"
								onChange={(evnt) => handleChange(index, evnt)}
								value={name}
								className="form-control"
								id="name"
								placeholder="Name"
							/>
						</div>
						<div className="form-group col-md-2">
							<label>CourseID</label>
							<input
								type="text"
								name="course"
								onChange={(evnt) => handleChange(index, evnt)}
								value={course}
								className="form-control"
								id="name"
								placeholder="Course"
							/>
						</div>

						<div className="col-md-1 text-center">
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

			<div className="row">
				<div className="col-sm-12">
					<button
						className="btn btn-outline-success "
						onClick={addInputField}>
						Add New
					</button>
				</div>
			</div>
			<div className="col-sm-4"></div>
		</div>
	);
};

export default TeacherBill;
