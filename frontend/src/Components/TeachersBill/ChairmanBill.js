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
import TwoField from '../../Functions/TwoField';
import StudentCount from '../../Functions/StudentCount';
import HandleSem from '../../Functions/HandleSem';
import TermPaperComp from '../../Functions/TermPaperComp';

const ChairmanBill = () => {
	const [inputSet, setInputSet] = useState([
		{
			name: '',
			course: '',
		},
	]);
	const [inputMod, setInputMod] = useState([
		{
			name: '',
			course: '',
		},
	]);
	const [inputAnsA, setInputAnsA] = useState([
		{
			name: '',
			course: '',
		},
	]);
	const [inputAnsB, setInputAnsB] = useState([
		{
			name: '',
			course: '',
		},
	]);
	const [inputTerm, setInputTerm] = useState([
		{
			name: '',
			course: '',
		},
	]);
	const [inputPrac, setInputPrac] = useState([
		{
			name: '',
			course: '',
		},
	]);
	const [inputTab, setInputTab] = useState([
		{
			name: '',
			course: '',
		},
	]);
	const [inputViva, setInputViva] = useState([
		{
			name: '',
			course: '',
		},
	]);
	const [inputScrA, setInputScrA] = useState([
		{
			name: '',
			course: '',
		},
	]);
	const [inputScrB, setInputScrB] = useState([
		{
			name: '',
			course: '',
		},
	]);
	const [inputType, setInputType] = useState([
		{
			name: '',
			course: '',
		},
	]);
	const [inputInvi, setInputInvi] = useState([
		{
			name: '',
			course: '',
		},
	]);
	const [inputStudentReg, setInputStudentReg] = useState([
		{
			course: '',
			number: '',
		},
	]);
	const [exam, setExam] = useState({
		session: '',
		semester: '',
	});
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const submit = async () => {
		console.log(exam);
		console.log(inputSet);
		console.log(inputMod);
		console.log(inputAnsA);
		console.log(inputAnsB);
		console.log(inputScrA);
		console.log(inputScrB);
		console.log(inputTerm);
		console.log(inputTab);
		console.log(inputPrac);
		console.log(inputViva);
		console.log(inputType);
		console.log(inputInvi);
		console.log(inputStudentReg);
	};
	return (
		<>
			<div className="row Full-form-page">
				<Links />
				<form
					className="col-md-10 Form"
					onSubmit={handleSubmit}>
					<h1 className="text-center Form-title">Chairman Bill</h1>
					<div className="row">
						<div className="form-group col-md-5">
							<Dropdown
								options={semesterOptions}
								dropdownTitle={semesterTitle}
								handleData={(child) => HandleSem(child, exam, setExam)}
							/>
						</div>
						<div className="form-group col-md-5">
							<Dropdown
								options={sessionOptions}
								dropdownTitle={sessionTitle}
								handleData={(child) => HandleSem(child, exam, setExam)}
							/>
						</div>
					</div>
					<h3>
						<b>01. Question Setting</b>
					</h3>
					<TwoField
						inputFields={inputSet}
						setInputFields={setInputSet}
					/>
					<h3>
						<b>02. Question Moderation</b>
					</h3>
					<TwoField
						inputFields={inputMod}
						setInputFields={setInputMod}
					/>
					<h3>
						<b>03. Answerpaper Checking</b>
					</h3>
					<h4>Part - A</h4>
					<TwoField
						inputFields={inputAnsA}
						setInputFields={setInputAnsA}
					/>
					<h4>Part - B</h4>
					<TwoField
						inputFields={inputAnsB}
						setInputFields={setInputAnsB}
					/>
					<h3>
						<b>04. Term Test / Internal Assessment</b>
					</h3>
					<TwoField
						inputFields={inputTerm}
						setInputFields={setInputTerm}
					/>
					<h3>
						<b>05. Practical Exam / Sessional Assessment / LAB</b>
					</h3>
					<TwoField
						inputFields={inputPrac}
						setInputFields={setInputPrac}
					/>
					<h3>
						<b>06. Tabulation</b>
					</h3>
					<TwoField
						inputFields={inputTab}
						setInputFields={setInputTab}
					/>{' '}
					<h3>
						<b>07. Viva</b>
					</h3>
					<TwoField
						inputFields={inputViva}
						setInputFields={setInputViva}
					/>
					<h3>
						<b>08. Scrutiny</b>
					</h3>
					<h4>Part - A</h4>
					<TwoField
						inputFields={inputScrA}
						setInputFields={setInputScrA}
					/>
					<h4>Part - B</h4>
					<TwoField
						inputFields={inputScrB}
						setInputFields={setInputScrB}
					/>
					<h4>
						<b>
							09. Term Paper / Seminar Paper / Field Work / MonoGraph / Study
							Tour / Content Analysis / Workshop / Project / Thesis / Internship
							/ Research Planning
						</b>
					</h4>
					<TermPaperComp/>
					<h3>
						<b>10. Question Type</b>
					</h3>
					<TwoField
						inputFields={inputType}
						setInputFields={setInputType}
					/>
					<h3>
						<b>11. Invigilation</b>
					</h3>
					<TwoField
						inputFields={inputInvi}
						setInputFields={setInputInvi}
					/>
					<h3>
						<b>12. Student Registration</b>
					</h3>
					<StudentCount
						inputFields={inputStudentReg}
						setInputFields={setInputStudentReg}
					/>
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

export default ChairmanBill;
