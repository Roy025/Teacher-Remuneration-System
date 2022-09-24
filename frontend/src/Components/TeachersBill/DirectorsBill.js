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
import { Additions, Chairman } from './InfoComp';
const DirectorsBill = () => {
	const [inputFields, setInputFields] = useState([
		{
			institute: '',
			department: '',
			member: '',
		},
	]);
	const defaultInput = {
		institute: '',
		department: '',
		member: '',
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
			<div className="Row">
				<Links />

				<form className="col-md-9 Director-form">
					<h1 className="text-center Director-form-title">Directors Bill</h1>
					<div className="Row1 Directors-form-row">
						<div className="form-group col-md-5 Subrow1">
							<Dropdown
								options={semesterOptions}
								dropdownTitle={semesterTitle}
							/>
						</div>
						<div className="form-group col-md-5 Subrow1">
							<Dropdown
								options={sessionOptions}
								dropdownTitle={sessionTitle}
							/>
						</div>
					</div>
					<div className="form-group Directors-form-row">
						<label>Committe Chairman</label>
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Name"
						/>
					</div>
					<div className="form-group Directors-form-row">
						<label>Chief Invigilator</label>
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Name"
						/>
					</div>
					<div className="container">
						<h3>Committe Member</h3>

						<Chairman
							inputFields={inputFields}
							handleChange={handleChange}
							removeInputFields={removeInputFields}
						/>
						<Additions
							inputFields={inputFields}
							setInputFields={setInputFields}
							defaultInput={defaultInput}
						/>
					</div>
				</form>
			</div>
		</>
	);
};

export default DirectorsBill;
