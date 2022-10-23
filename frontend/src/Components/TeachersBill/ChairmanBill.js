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

					<h3>Question Typeing</h3>
					<FourField />
					<h3>Question Moderation</h3>
					<FourField />
					<h3>Answerpaper Checking</h3>
					<h4>Part - A</h4>
					<FourField />
					<h4>Part - B</h4>
					<FourField />
					<h3>Term Test / Internal Assessment</h3>
					<FourField />
					<h3>Practical Exam / Sessional Assessment / LAB</h3>
					<FourField />
					<h3>Tabulation</h3>
					<FourField />
					<h3>Viva</h3>
					<FourField />
					<h3>Scrutinizer</h3>
					<h4>Part - A</h4>
					<FourField />
					<h4>Part - B</h4>
					<FourField />
					<h3>Examiner</h3>
					<h4>Part - A</h4>
					<FourField />
					<h4>Part - B</h4>
					<FourField />

					<h3>Student Registration</h3>
					<StudentCount />
				</form>
			</div>
		</>
	);
};

export default ChairmanBill;
