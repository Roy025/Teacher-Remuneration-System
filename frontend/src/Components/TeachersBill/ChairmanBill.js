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
import FourField from '../../Functions/FourField';
import StudentCount from '../../Functions/StudentCount';

const ChairmanBill = () => {
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
	return (
		<>
			<div className="row Full-form-page">
				<Links />
				<form className="col-md-10 Form">
					<h1 className="text-center Form-title">Chairman Bill</h1>
					<div className="row">
						<div className="form-group col-md-5">
							<Dropdown
								options={semesterOptions}
								dropdownTitle={semesterTitle}
							/>
						</div>
						<div className="form-group col-md-5">
							<Dropdown
								options={sessionOptions}
								dropdownTitle={sessionTitle}
							/>
						</div>
					</div>
					<h3>Term Test</h3>
					<FourField />
					<h3>Question Type</h3>
					<FourField />
					<h3>Question Setter</h3>
					<FourField />
					<h3>Examiner</h3>
					<h4>Part - A</h4>
					<FourField />
					<h4>Part - B</h4>
					<FourField />
					<h3>Scrutinizer</h3>
					<h4>Part - A</h4>
					<FourField />
					<h4>Part - B</h4>
					<FourField />
					<h3>Tabulation</h3>
					<FourField />
					<h3>Practical Exam</h3>
					<FourField />
					<h3>Viva</h3>
					<FourField />
					<h3>Student Registration</h3>
					{/* {inputFields.map((data, index) => {
						const { number, course } = data;
						return (
							<div
								className="row"
								key={index}>
								<div class="form-group col-md-3">
									<label for="exampleFormControlInput1">CourseID</label>
									<input
										type="text"
										name="course"
										onChange={(evnt) => handleChange(evnt, index)}
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
										onChange={(evnt) => handleChange(evnt, index)}
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
								<div className="col-md-1">
									<Additions
										inputFields={inputFields}
										setInputFields={setInputFields}
										defaultInput={defaultInput}
									/>
								</div>
							</div>
						);
					})} */}
					<StudentCount />
				</form>
			</div>
		</>
	);
};

export default ChairmanBill;
