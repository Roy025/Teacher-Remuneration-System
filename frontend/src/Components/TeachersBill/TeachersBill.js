import React from 'react';
import Links from './Links';
import './TeachersBill.css';

const TeachersBill = () => {
	return (
		<>
			<div className="row">
				<Links />
				<form className="col-md-8">
					<div className="row">
						<div class="form-group col-md-5">
							<label for="exampleFormControlSelect1">Session</label>
							<select
								class="form-control"
								id="exampleFormControlSelect1">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</div>
						<div class="form-group col-md-5">
							<label for="exampleFormControlSelect1">Semester</label>
							<select
								class="form-control"
								id="exampleFormControlSelect1">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</div>
					</div>
					<div class="form-group">
						<label for="exampleFormControlInput1">Committe Chairman</label>
						<input
							type="text"
							class="form-control"
							id="exampleFormControlInput1"
							placeholder="name"
						/>
					</div>
					<div class="form-group">
						<label for="exampleFormControlInput1">Chief Invigilator</label>
						<input
							type="text"
							class="form-control"
							id="exampleFormControlInput1"
							placeholder="Name"
						/>
					</div>
					<div className="row">
						<div class="form-group col-md-4">
							<label for="exampleFormControlInput1">Institute</label>
							<input
								type="text"
								class="form-control"
								id="exampleFormControlInput1"
							/>
						</div>
						<div class="form-group col-md-4">
							<label for="exampleFormControlInput1">Department</label>
							<input
								type="text"
								class="form-control"
								id="exampleFormControlInput1"
							/>
						</div>
						<div class="form-group col-md-4">
							<label for="exampleFormControlInput1">Member</label>
							<input
								type="text"
								class="form-control"
								id="exampleFormControlInput1"
							/>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default TeachersBill;
