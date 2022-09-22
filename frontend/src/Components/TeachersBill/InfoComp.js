import React from 'react';

const InfoComp = () => {
	return (
		<div className="row">
			<div className="form-group col-md-3">
				<label>Institute</label>
				<input
					name="institute"
					type="text"
					className="form-control"
					id="institute"
				/>
			</div>
			<div className="form-group col-md-3">
				<label>Department</label>
				<input
					name="department"
					type="text"
					className="form-control"
					id="department"
				/>
			</div>
			<div className="form-group col-md-3">
				<label>Teacher Name</label>
				<input
					name="name"
					type="text"
					className="form-control"
					id="name"
				/>
			</div>
			<div className="form-group col-md-2">
				<label>CourseID</label>
				<input
					name="course"
					type="text"
					className="form-control"
					id="course"
				/>
			</div>
			<div className="col-md-1">
				<button
					type="button"
					className="add"
					//onClick={addFields}
				>
					<i className="fa-sharp fa-solid fa-plus"></i>
				</button>
			</div>
		</div>
	);
};

export default InfoComp;
