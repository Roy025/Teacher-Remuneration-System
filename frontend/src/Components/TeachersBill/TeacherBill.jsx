import React from 'react';
import StudentCount from '../../Functions/StudentCount';
import Dropdown, {
	semesterOptions,
	semesterTitle,
	sessionOptions,
} from '../SampleDropdown/Dropdown';
import Links from './Links';

export const TeacherBill = () => {
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
								dropdownTitle={semesterTitle}
							/>
						</div>
					</div>
					<h3>Term Test</h3>
					<StudentCount />
					<h3>Scrutiny</h3>
					<StudentCount />
					<h3>Practical Exam</h3>
					<StudentCount />
					<h3>Viva</h3>
					<StudentCount />
				</form>
			</div>
		</>
	);
};
