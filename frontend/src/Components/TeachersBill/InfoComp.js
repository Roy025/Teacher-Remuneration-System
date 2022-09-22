import React from 'react';

const InfoComp = () => {
	return (
		<div className="row">
			<div class="form-group col-md-3">
				<label for="exampleFormControlInput1">Institute</label>
				<input
					name="institute"
					type="text"
					class="form-control"
					id="institute"
				/>
			</div>
			<div class="form-group col-md-3">
				<label for="exampleFormControlInput1">Department</label>
				<input
					name="department"
					type="text"
					class="form-control"
					id="department"
				/>
			</div>
			<div class="form-group col-md-3">
				<label for="exampleFormControlInput1">Teacher Name</label>
				<input
					name="member"
					type="text"
					class="form-control"
					id="member"
				/>
			</div>
			<div class="form-group col-md-2">
				<label for="exampleFormControlInput1">CourseID</label>
				<input
					name="course"
					type="text"
					class="form-control"
					id="course"
				/>
			</div>
			<div class="col-md-1">
				<button
					type="button"
					class="add"
					//onClick={addFields}
				>
					<i class="fa-sharp fa-solid fa-plus"></i>
				</button>
			</div>
		</div>
	);
};

export default InfoComp;
