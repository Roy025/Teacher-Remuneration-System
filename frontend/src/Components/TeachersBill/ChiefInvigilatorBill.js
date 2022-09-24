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

const ChiefInvigilatorBill = () => {
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
					<div className="form-group col-md-4">
						<label>CourseID</label>
						<input
							name="course"
							type="text"
							className="form-control"
							id="course"
						/>
					</div>
					<h5>Invigilator</h5>
					<TeacherBill />
				</form>
			</div>
		</>
	);
};

export default ChiefInvigilatorBill;
