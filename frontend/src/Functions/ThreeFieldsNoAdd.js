import React, { useState } from 'react';
import '../Components/SampleDropdown/styles.css';

const ThreeFieldsNoAdd = () => {
	const [inputFields, setInputFields] = useState([
		{
			institute: '',
			department: '',
			name: '',
		},
	]);

	const handleChange = (evnt, index) => {
		const { name, value } = evnt.target;
		const list = [...inputFields];
		list[index][name] = value;
		setInputFields(list);
	};

	return (
		<div className="container">
			{inputFields.map((data, index) => {
				const { institute, department, name } = data;
				return (
					<div
						className="row"
						key={index}>
						<div className="form-group col-md-3">
							<label>Institute</label>
							<input
								type="text"
								name="institute"
								onChange={(evnt) => handleChange(evnt, index)}
								value={institute}
								className="form-control"
								placeholder="Institute"
							/>
						</div>
						<div className="form-group col-md-3">
							<label>Department</label>
							<input
								type="text"
								name="department"
								onChange={(evnt) => handleChange(evnt, index)}
								value={department}
								className="form-control"
								placeholder="Department"
							/>
						</div>
						<div className="form-group col-md-3">
							<label>Teacher Name</label>
							<input
								type="text"
								name="name"
								onChange={(evnt) => handleChange(evnt, index)}
								value={name}
								className="form-control"
								placeholder="Name"
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ThreeFieldsNoAdd;
