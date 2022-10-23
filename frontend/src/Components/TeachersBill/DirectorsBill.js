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
import { Additions, ThreeFields } from '../../Functions/InfoComp';

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
			<div className="Row Full-form-page">
				<Links />
				<form className="col-md-9 Form">
					<h1 className="text-center Form-title">Directors Bill</h1>
					<div className="Flex-row Form-row">
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
					<div className="form-group Form-row">
						<label>Committe Chairman</label>
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Name"
						/>
					</div>
					<div className="form-group Form-row">
						<label>Chief Invigilator</label>
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Name"
						/>
					</div>

					<h3>Committe Member</h3>
					<ThreeFields
						inputFields={inputFields}
						handleChange={handleChange}
						removeInputFields={removeInputFields}
					/>
					<Additions
						inputFields={inputFields}
						setInputFields={setInputFields}
						defaultInput={defaultInput}
					/>
				</form>
			</div>
		</>
	);
};

export default DirectorsBill;
