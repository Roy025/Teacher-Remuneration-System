//import React, { useState } from 'react';
import Links from './Links';
import './TeachersBill.css';
import Dropdown, {
	semesterOptions,
	semesterTitle,
	sessionTitle,
	sessionOptions,
} from '../SampleDropdown/Dropdown';
import '../SampleDropdown/styles.css';
import { useState } from 'react';
import ThreeFields from '../../Functions/ThreeFieldsNoAdd';
import Additions from '../../Functions/Additions';

const ChiefInvigilatorBill = () => {
	const [input, setInput] = useState([
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
		course: '',
	};
	const [inputFields, setInputFields] = useState([
		{
			institute: '',
			department: '',
			member: '',
			course: '',
		},
	]);
	const defaultIn = {
		institute: '',
		department: '',
		member: '',
	};
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
	};
	return (
		<>
			<div className="row">
				<Links />
				<form className="col-md-8 Form">
					<h1 className="text-center Form-title">Chief Invigilator Bill</h1>
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

					<div className="col-md-7">
						<h5>Invigilation</h5>

						{inputFields.map((data, index) => {
							console.log(inputFields);
							const { course } = data;
							return (
								<div
									className="row"
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
									<ThreeFields
										inputFields={input}
										handleChange={handleChange}
										removeInputFields={removeInputFields}
									/>
									<Additions
										inputFields={input}
										setInputFields={setInput}
										defaultInput={defaultIn}
									/>
									<div className="col-md-1 text-center mt-3">
										{input.length !== 1 ? (
											<button
												className="btn-outline-danger add"
												onClick={removeInputFields}>
												x
											</button>
										) : (
											''
										)}
									</div>
								</div>
							);
						})}

						<Additions
							inputFields={inputFields}
							setInputFields={setInputFields}
							defaultInput={defaultInput}
						/>
						{input.length !== 1 ? (
							<button
								className="btn-outline-danger add"
								onClick={removeInputFields}>
								x
							</button>
						) : (
							''
						)}
					</div>
				</form>
			</div>
		</>
	);
};

export default ChiefInvigilatorBill;
