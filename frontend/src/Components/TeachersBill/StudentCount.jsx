import React, { useState } from 'react';
import { Additions } from './InfoComp';

const StudentCount = () => {
	const [inputFields, setInputFields] = useState([
		{
			course: '',
			number: '',
		},
	]);
	const defaultInput = {
		course: '',
		number: '',
	};
	const handleChange = (index, evnt) => {
		const { name, value } = evnt.target;
		const list = [...inputFields];
		list[index][name] = value;
		setInputFields(list);
	};
	const removeInputFields = (e, index) => {
		e.preventDefault();
		const rows = [...inputFields];
		rows.splice(index, 1);
		setInputFields(rows);
	};
	return (
		<>
			{inputFields.map((data, index) => {
				const { number, course } = data;
				return (
					<div className="row">
						<div class="form-group col-md-3">
							<label for="exampleFormControlInput1">CourseID</label>
							<input
								type="text"
								name="course"
								onChange={(evnt) => handleChange(index, evnt)}
								value={course}
								className="form-control"
								placeholder="Course"
							/>
						</div>
						<div class="form-group col-md-3">
							<label for="exampleFormControlInput1">
								Resgistered Student Count
							</label>
							<input
								type="text"
								name="number"
								onChange={(evnt) => handleChange(index, evnt)}
								value={number}
								className="form-control"
								placeholder="number"
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
			<div class="col-md-1">
				<Additions
					inputFields={inputFields}
					setInputFields={setInputFields}
					defaultInput={defaultInput}
				/>
			</div>
		</>
	);
};

export default StudentCount;
