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
import ThreeFieldsNoAdd from '../../Functions/ThreeFieldsNoAdd';
import ThreeFields from '../../Functions/ThreeFields';

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
						<ThreeFieldsNoAdd/>
					</div>
					<div className="form-group Form-row">
						<label>Chief Invigilator</label>
						<ThreeFieldsNoAdd/>
					</div>

					<h3>Committe Members</h3>
					<ThreeFields
						inputFields={inputFields}
						handleChange={handleChange}
						removeInputFields={removeInputFields}
					/>
				</form>
			</div>
		</>
	);
};

export default DirectorsBill;
