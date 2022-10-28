import React from "react";
// import { ReactDOM } from "react-dom";
import StudentCount from "../../Functions/StudentCount";
import Dropdown, {
  semesterOptions,
  semesterTitle,
  sessionOptions,
  sessionTitle,
} from "../SampleDropdown/Dropdown";
import Links from "./Links";

const TeacherBill = () => {
	return (
		<>
			<div className="row Full-form-page">
				<Links />
				<form className="col-md-10 Form">
					<h1 className="text-center Form-title">Teacher Bill</h1>
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
					<h3>Answerpaper Checking</h3>
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

export default TeacherBill;
