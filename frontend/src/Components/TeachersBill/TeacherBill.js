import React, { useState } from 'react';
import '../SampleDropdown/styles.css';
import { Additions } from './InfoComp';

const TeacherBill = () => {
	const [inputFields, setInputFields] = useState([
		{
			institute: '',
			department: '',
			name: '',
			course: '',
		},
	]);
	const defaultInput = {
		institute: '',
		department: '',
		name: '',
		course: '',
	};
	const removeInputFields = (e, index) => {
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
		<div className="Flex-row Row4 Form-row Common-info-flex-column">
			{inputFields.map((data, index) => {
				const { institute, department, name, course } = data;
				return (
					<div
						className="row"
						key={index}>
						<div className="form-group col">
							<label>Institute</label>
							<input
								type="text"
								name="institute"
								onChange={(evnt) => handleChange(index, evnt)}
								value={institute}
								className="form-control"
								placeholder="Institute"
							/>
						</div>
						<div className="form-group col">
							<label>Department</label>
							<input
								type="text"
								name="department"
								onChange={(evnt) => handleChange(index, evnt)}
								value={department}
								className="form-control"
								placeholder="Department"
							/>
						</div>
						<div className="form-group col">
							<label>Teacher Name</label>
							<input
								type="text"
								name="name"
								onChange={(evnt) => handleChange(index, evnt)}
								value={name}
								className="form-control"
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
								placeholder="Course"
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
			<div className="row">
				<div className="col-sm-1">
					<Additions
						inputFields={inputFields}
						setInputFields={setInputFields}
						defaultInput={defaultInput}
					/>{' '}
				</div>
			</div>
		</div>
	);
};

export default TeacherBill;
