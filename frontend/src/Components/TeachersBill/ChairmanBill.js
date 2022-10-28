import React, { useState } from "react";
// import { ReactDOM } from "react-dom";
import Links from "./Links";
import "./TeachersBill.css";
import Dropdown, {
  semesterOptions,
  semesterTitle,
  sessionTitle,
  sessionOptions,
} from "../SampleDropdown/Dropdown";
import "../SampleDropdown/styles.css";
import FourField from "../../Functions/TwoField";
import StudentCount from "../../Functions/StudentCount";

const ChairmanBill = () => {
  const [inputFields, setInputFields] = useState([
    {
      course: "",
      number: "",
    },
  ]);
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
      <div>
        <Links />
      </div>
      <div className="row Full-form-page">
        {/* <Links /> */}
        <form className="col-md-10 Form">
          {/* <h1 className="text-center Form-title">Chairman Bill</h1> */}
          <div className="row">
            <div className="form-group col-md-5">
              <Dropdown
                options={semesterOptions}
                dropdownTitle={semesterTitle}
              />
            </div>
            <div className="form-group col-md-5">
              <Dropdown options={sessionOptions} dropdownTitle={sessionTitle} />
            </div>
          </div>

          <h3>
            <b>01. Question Setting</b>
          </h3>
          <FourField />
          <h3>
            <b>02. Question Moderation</b>
          </h3>
          <FourField />
          <h3>
            <b>03. Answerpaper Checking</b>
          </h3>
          <h4>Part - A</h4>
          <FourField />
          <h4>Part - B</h4>
          <FourField />
          <h3>
            <b>04. Term Test / Internal Assessment</b>
          </h3>
          <FourField />
          <h3>
            <b>05. Practical Exam / Sessional Assessment / LAB</b>
          </h3>
          <FourField />
          <h3>
            <b>06. Tabulation</b>
          </h3>
          <h4>RPS Exam System</h4>
          <FourField />
          <h4>ORPS Exam System</h4>
          <FourField />
          <h3>
            <b>07. Viva</b>
          </h3>
          <FourField />
          <h3>
            <b>08. Scrutiny</b>
          </h3>
          <FourField />
          <h3>
            <b>09. Term PAPER</b>
          </h3>
          <h3>
            <b>10. Question Type</b>
          </h3>
          <FourField />
          <h3>
            <b>11. </b>
          </h3>
          <FourField />
          <h3>
            <b>12. Student Registration</b>
          </h3>
          <StudentCount />
        </form>
      </div>
    </>
  );
=======
	semesterOptions,
	semesterTitle,
	sessionTitle,
	sessionOptions,
} from '../SampleDropdown/Dropdown';
import '../SampleDropdown/styles.css';
import TwoField from '../../Functions/TwoField';
import StudentCount from '../../Functions/StudentCount';
import Additions from '../../Functions/Additions';

const ChairmanBill = () => {
	const [inputSet, setInputSet] = useState([
		{
			course: '',
			number: '',
		},
	]);
	const [inputMod, setInputMod] = useState([
		{
			course: '',
			number: '',
		},
	]);
	const [inputChck, setInputChck] = useState([
		{
			course: '',
			number: '',
		},
	]);
	const [inputTerm, setInputTerm] = useState([
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
	const [inputTab, setInputTab] = useState([
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
	const [inputScr, setInputScr] = useState([
		{
			course: '',
			number: '',
		},
	]);
	const [inputPaper, setInputPaper] = useState([
		{
			course: '',
			number: '',
		},
	]);
	const [inputType, setInputType] = useState([
		{
			course: '',
			number: '',
		},
	]);
	const [inputInvi, setInputInvi] = useState([
		{
			course: '',
			number: '',
		},
	]);

	const [supervisors, setsupervisors] = useState([
		{
			Name1: '',
		},
	]);
	const defaultSuper = {
		Name1: '',
	};
	const defaultExaminar = {
		Name2: '',
	};
	const [examinars, setexaminars] = useState([
		{
			Name2: '',
		},
	]);
	const [input, setInput] = useState([
		{
			course: '',
		},
	]);

	const removeInputFields = (e, index) => {
		e.preventDefault();
		const rows = [...input];
		rows.splice(index, 1);
		setInput(rows);
	};
	const handleChange = (evnt, index) => {
		const { name, value } = evnt.target;
		const list = [...input];
		list[index][name] = value;
		setInput(list);
		console.log(input);
	};

	const [isChecked, setIsChecked] = useState(false);

	const handleOnChange = () => {
		setIsChecked(!isChecked);
	};
	console.log(supervisors);
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
						inputFields={inputChck}
						setInputFields={setInputChck}
					/>
					<h4>Part - B</h4>
					<TwoField
						inputFields={inputChck}
						setInputFields={setInputChck}
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
					<TwoField
						inputFields={inputScr}
						setInputFields={setInputScr}
					/>
					<h4>
						<b>
							09. Term Paper / Seminar Paper / Field Work / MonoGraph / Study
							Tour / Content Analysis / Workshop / Project / Thesis / Internship
							/ Research Planning
						</b>
					</h4>
					{input.map((data, index) => {
						console.log(input);
						const { course } = data;
						return (
							<div
								className="TermPaper"
								key={index}>
								<div className="form-group col-md-2">
									<label>CourseID</label>
									<input
										type="text"
										name="course"
										onChange={(evnt) => handleChange(evnt, index)}
										value={course}
										className="form-control"
										placeholder="Course"
									/>
								</div>
								<h5>
									<b>Superviser</b>
								</h5>

								{supervisors.map((supervisor, index) => {
									const { Name1 } = supervisor;
									return (
										<div
											className="row"
											key={index}>
											<div className="form-group col-md-3">
												{index === 0 ? <label>Teacher's Name</label> : ''}
												<input
													type="text"
													name="Name1"
													onChange={(evnt) => handleChange(evnt, index)}
													value={Name1}
													className="form-control"
													placeholder="Name"
												/>
											</div>

											<div className="col-md-1 text-center mt-3">
												{supervisors.length !== 1 ? (
													<button
														className="btn-outline-danger add"
														onClick={(evnt) => removeInputFields(evnt, index)}>
														x
													</button>
												) : (
													''
												)}
											</div>
											{supervisors.length - 1 === index && (
												<div className="row">
													<Additions
														inputFields={supervisors}
														setInputFields={setsupervisors}
														defaultInput={defaultSuper}
													/>
												</div>
											)}
										</div>
									);
								})}
								<h5>
									<b>Examiner</b>
								</h5>
								{examinars.map((examinar, index) => {
									const { Name2 } = examinar;
									return (
										<div
											className="row"
											key={index}>
											<div className="form-group col-md-3">
												{index === 0 ? <label>Teacher's Name</label> : ''}
												<input
													type="text"
													name="Name2"
													onChange={(evnt) => handleChange(evnt, index)}
													value={Name2}
													className="form-control"
													placeholder="Name"
												/>
											</div>

											<div className="col-md-1 text-center mt-3">
												{examinars.length !== 1 ? (
													<button
														className="btn-outline-danger add"
														onClick={(evnt) => removeInputFields(evnt, index)}>
														x
													</button>
												) : (
													''
												)}
											</div>
											{examinars.length - 1 === index && (
												<div className="row">
													<Additions
														inputFields={examinars}
														setInputFields={setexaminars}
														defaultInput={defaultExaminar}
													/>
												</div>
											)}
										</div>
									);
								})}
								<div className="checkbox">
									<input
										type="checkbox"
										id="committe"
										name="committe"
										value="Exam Committe"
										checked={isChecked}
										onChange={handleOnChange}
									/>
									<h5>Exam Committe</h5>
								</div>
							</div>
						);
					})}
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
					<StudentCount />
				</form>
			</div>
		</>
	);
};

export default ChairmanBill;
