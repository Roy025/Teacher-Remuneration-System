import React, { useState } from 'react';
import HandleSem from '../../Functions/HandleSem';
import StudentCount from '../../Functions/StudentCount';
// import { ReactDOM } from "react-dom";
import Dropdown, {
	semesterOptions,
	semesterTitle,
	sessionOptions,
	sessionTitle,
} from '../SampleDropdown/Dropdown';
import Links from './Links';

const TeacherBill = () => {
	const [inputTerm, setInputTerm] = useState([
		{
			course: '',
			number: '',
		},
	]);
	const [inputAnsA, setInputAnsA] = useState([
		{
			course: '',
			number: '',
		},
	]);
	const [inputAnsB, setInputAnsB] = useState([
		{
			course: '',
			number: '',
		},
	]);
	const [inputScrA, setInputScrA] = useState([
		{
			course: '',
			number: '',
		},
	]);
	const [inputScrB, setInputScrB] = useState([
		{
			course: '',
			number: '',
		},
	]);
	const [inputPrac, setInputPrac] = useState([
		{
			course: '',
			number: '',
		},
	]);
	const [inputViva, setInputViva] = useState([
		{
			course: '',
			number: '',
		},
	]);
	const [exam, setExam] = useState({
		session: '',
		semester: '',
	});
	// const handleData = (child) => {
	// 	let newExam = { ...exam };
	// 	if (child.length === 6) return;
	// 	else if (child.length === 7) {
	// 		newExam.session = child;
	// 		console.log(child.length);
	// 	} else if (child.length === 3) {
	// 		newExam.semester = child;
	// 		console.log(child.length);
	// 	}
	// 	setExam(newExam);
	// 	// Fetch from api by exam info
	// };
	console.log(exam);
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const submit = async () => {
		console.log(inputTerm);
		console.log(inputAnsA);
		console.log(inputAnsB);
		console.log(inputScrA);
		console.log(inputScrB);
		console.log(inputPrac);
		console.log(inputViva);
		console.log(exam);
	};
	return (
		<>
			<div>
				<Links />
			</div>
			<div className="FullFormPage">
				<form
					className="Form"
					onSubmit={handleSubmit}>
					<div className="DropdownformRow">
						<div className="FormSubRow">
							<Dropdown
								options={sessionOptions}
								dropdownTitle={sessionTitle}
								handleData={(child) => HandleSem(child, exam, setExam)}
							/>
						</div>
						<div className="FormSubRow">
							<Dropdown
								options={semesterOptions}
								dropdownTitle={semesterTitle}
								handleData={(child) => HandleSem(child, exam, setExam)}
							/>
						</div>
					</div>
					<div className="formRow">
						<label className="Label">Term Test</label>
						<StudentCount
							inputFields={inputTerm}
							setInputFields={setInputTerm}
						/>
					</div>
					<h3>
						<b>Answerpaper Checking</b>
					</h3>
					<h4>Part - A</h4>
					<StudentCount
						inputFields={inputAnsA}
						setInputFields={setInputAnsA}
					/>
					<h4>Part - B</h4>
					<StudentCount
						inputFields={inputAnsB}
						setInputFields={setInputAnsB}
					/>
					<div className="formRow">
						<label className="Label">Scrutiny</label>
						<h4>Part - A</h4>
						<StudentCount
							inputFields={inputScrA}
							setInputFields={setInputScrA}
						/>
						<h4>Part - B</h4>
						<StudentCount
							inputFields={inputScrB}
							setInputFields={setInputScrB}
						/>
					</div>
					<div className="formRow">
						<label className="Label">Practical Exam</label>
						<StudentCount
							inputFields={inputPrac}
							setInputFields={setInputPrac}
						/>
					</div>
					<div className="formRow">
						<label className="Label">Viva</label>
						<StudentCount
							inputFields={inputViva}
							setInputFields={setInputViva}
						/>
					</div>
					<div>
						<button
							type="submit"
							onClick={submit}>
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default TeacherBill;
