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
			<div>
				<Links />
			</div>

			{/* <div className="Row Full-form-page"> */}
			<div className="FullFormPage">
				{/* <Links /> */}
				{/* <form className="col-md-9 Form"> */}
				<form
					className="Form"
					onSubmit={handleSubmit}>
					<h1 className="text-center">Director Bill</h1>
					<div className="DropdownformRow">
						<div className="FormSubRow">
							<Dropdown
								options={semesterOptions}
								dropdownTitle={semesterTitle}
								handleData={handleData}
							/>
						</div>

						<div className="FormSubRow">
							<Dropdown
								options={sessionOptions}
								dropdownTitle={sessionTitle}
								handleData={handleData}
							/>
						</div>
					</div>
					{/* <div className="form-group Form-row"> */}
					<div className="formRow">
						<label className="Label">Committee Chairman</label>
						<ThreeFieldsNoAdd
							inputFields={inputChair}
							setInputFields={setInputChair}
						/>
					</div>
					{/* <div className="form-group Form-row"> */}
					<div className="formRow">
						<label className="Label">Chief Invigilator</label>
						<ThreeFieldsNoAdd
							inputFields={inputInvi}
							setInputFields={setInputInvi}
						/>
					</div>

					<div className="formRow">
						<label className="Label">Committee Members</label>
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
					</div>
				</form>
			</div>
		</>
	);
};

export default DirectorsBill;
