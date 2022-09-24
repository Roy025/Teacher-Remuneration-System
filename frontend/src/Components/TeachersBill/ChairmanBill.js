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
import InfoComp from './InfoComp';
import TeacherBill from './TeacherBill';

const ChairmanBill = () => {
	const [inputFields, setInputFields] = useState([
		{
			course: '',
			number: '',
		},
	]);

	const addInputField = (e) => {
		e.preventDefault();
		console.log(e.target.name);
		setInputFields([
			...inputFields,
			{
				[e.target.name]: '',
			},
		]);
		console.log(e.target.name);

		console.log(inputFields);
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
		<>
			<div className="row">
				<Links />
				<form className="col-md-10">
					<h1 className="text-center">Chairman Bill</h1>
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
					<h3>Question Type</h3>
					<TeacherBill />
					<h3>Question Setter</h3>
					<TeacherBill />
					<h3>Examiner</h3>
					<h4>Part - A</h4>
					<TeacherBill />
					<h4>Part - B</h4>
					<TeacherBill />
					<h3>Scrutinizer</h3>
					<h4>Part - A</h4>
					<TeacherBill />
					<h4>Part - B</h4>
					<TeacherBill />
					<h3>Tabulation</h3>
					<TeacherBill />
					<h3>Practical Exam</h3>
					<TeacherBill />
					<h3>Student Registration</h3>
					<div className="row">
						<div class="form-group col-md-3">
							<label for="exampleFormControlInput1">CourseID</label>
							<input
								type="text"
								name="course"
								//onChange={(evnt) => handleChange(index, evnt)}
								//value={data.course}
								className="form-control"
								id="course"
								placeholder="course"
							/>
						</div>
						<div class="form-group col-md-3">
							<label for="exampleFormControlInput1">
								Resgistered Student Count
							</label>
							<input
								type="text"
								name="numebr"
								//onChange={(evnt) => handleChange(index, evnt)}
								//value={data.course}
								className="form-control"
								id="numebr"
								placeholder="numebr"
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
						<div class="col-md-1">
							<button
								className="btn-outline-success add mt-4"
								onClick={addInputField}
								type="button">
								<i className="fa-sharp fa-solid fa-plus"></i>
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default ChairmanBill;
