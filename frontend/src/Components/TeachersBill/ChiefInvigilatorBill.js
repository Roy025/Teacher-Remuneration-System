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
import TeacherBill from './TeacherBill';
import { useState } from 'react';
import { Additions, Chairman, Chief } from './InfoComp';

const ChiefInvigilatorBill = () => {
	const [inputFields, setInputFields] = useState([
		{
			course: '',
		},
	]);

	const removeInputFields = (e, index) => {
		e.preventDefault();
		const rows = [...inputFields];
		rows.splice(index, 1);
		setInputFields(rows);
	};
	const handleChange = (index, evnt) => {
		const { name, value } = evnt.target;
		const list = [...inputFields];
		list[index][name] = value;
		setInputFields(list);
	};
	return (
		<>
			<div className="row">
				<Links />
				<form className="col-md-10">
					<h1 className="text-center">Chief Invigilator Bill</h1>
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

					<div class="col-md-7">
						<h5>Course</h5>
						<Chief
							inputFields={inputFields}
							handleChange={handleChange}
							removeInputFields={removeInputFields}
						/>
						{/* <div className="row">
							<div className="form-group col-md-3">
								<label>Course</label>
								<input
									type="text"
									name="course"
									//onChange={(evnt) => handleChange(index, evnt)}
									//value={data.course}
									className="form-control"
									id="course"
									placeholder="Course"
								/>
							</div>
						</div>
						<h5>Invigilator</h5>

						<Chairman
							inputFields={inputFields}
							handleChange={handleChange}
							removeInputFields={removeInputFields}
						/>
						<Additions
							inputFields={inputFields}
							setInputFields={setInputFields}
							defaultInput={defaultInput}
						/>*/}
					</div>
				</form>
			</div>
		</>
	);
};

export default ChiefInvigilatorBill;
