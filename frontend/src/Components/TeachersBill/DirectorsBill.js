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
			name: '',
		},
	]);
	const [inputChair, setInputChair] = useState([
		{
			institute: '',
			department: '',
			name: '',
		},
	]);
	const [inputInvi, setInputInvi] = useState([
		{
			institute: '',
			department: '',
			name: '',
		},
	]);
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const [data, setData] = useState('');
	const handleData = (childdata) => {
		setData((old) => {
			return [...old, { childdata }];
		});
		console.log(childdata);
	};
	console.log(data);
	const submit = async () => {
		console.log(inputFields);
		console.log(inputChair);
		console.log(inputInvi);
		console.log(data);
	};
	return (
		<>
			<div className="Row Full-form-page">
				<Links />
				<form
					className="col-md-9 Form"
					onSubmit={handleSubmit}>
					<h1 className="text-center Form-title">Directors Bill</h1>
					<div className="Flex-row Form-row">
						<div className="form-group col-md-5 Subrow1">
							<Dropdown
								options={semesterOptions}
								dropdownTitle={semesterTitle}
								handleData={handleData}
							/>
						</div>
						<div className="form-group col-md-5 Subrow1">
							<Dropdown
								options={sessionOptions}
								dropdownTitle={sessionTitle}
								handleData={handleData}
							/>
						</div>
					</div>
					<div className="form-group Form-row">
						<label>Committe Chairman</label>
						<ThreeFieldsNoAdd
							inputFields={inputChair}
							setInputFields={setInputChair}
						/>
					</div>
					<div className="form-group Form-row">
						<label>Chief Invigilator</label>
						<ThreeFieldsNoAdd
							inputFields={inputInvi}
							setInputFields={setInputInvi}
						/>
					</div>
					<h3>Committe Members</h3>
					<ThreeFields
						inputFields={inputFields}
						setInputFields={setInputFields}
					/>
					<div className="d-md-grid justify-content-md-end">
						<button
							type="submit"
							className="btn btn-dark btn-lg btn-block"
							onClick={submit}>
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default DirectorsBill;
