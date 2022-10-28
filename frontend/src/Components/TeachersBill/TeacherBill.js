import React, { useState } from 'react';
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
	return (
		<>
			<div className="row Full-form-page">
				<Links />
				<form className="col-md-10 Form">
					<h1 className="text-center Form-title">Teacher Bill</h1>
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
					<h3>
						<b>Term Test</b>
					</h3>
					<StudentCount
						inputFields={inputTerm}
						setInputFields={setInputTerm}
					/>
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
					<h3>
						<b>Scrutiny</b>
					</h3>
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
					<h3>
						<b>Practical Exam</b>
					</h3>
					<StudentCount
						inputFields={inputPrac}
						setInputFields={setInputPrac}
					/>
					<h3>
						<b>Viva</b>
					</h3>
					<StudentCount
						inputFields={inputViva}
						setInputFields={setInputViva}
					/>
				</form>
			</div>
		</>
	);
};

export default TeacherBill;
