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
import InfoComp from './InfoComp';

const ChiefInvigilatorBill = () => {
	// const [inputFields, setInputFields] = useState([
	// 	{ institute: '', department: '', member: '' },
	// ]);
	// const addFields = () => {
	// 	let newfield = { institute: '', department: '', member: '' };
	// 	setInputFields([...inputFields, newfield]);
	// };
	return (
		<>
			<div className="row">
				<Links />
				<form className="col-md-10">
					<h1 className="text-center">Chief Invigilator Bill</h1>
					<div className="row">
						<div class="form-group col-md-5">
							<Dropdown
								options={semesterOptions}
								dropdownTitle={semesterTitle}
							/>
						</div>
						<div class="form-group col-md-5">
							<Dropdown
								options={sessionOptions}
								dropdownTitle={sessionTitle}
							/>
						</div>
					</div>
					<div class="form-group col-md-4">
						<label for="exampleFormControlInput1">CourseID</label>
						<input
							name="course"
							type="text"
							class="form-control"
							id="course"
						/>
					</div>
					<h5>Invigilator</h5>
					<InfoComp />
					<div class="col-md-1">
						<button
							type="button"
							class="add"
							//onClick={addFields}
						>
							<i class="fa-sharp fa-solid fa-plus"></i>
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ChiefInvigilatorBill;
