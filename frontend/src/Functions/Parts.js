import React, { useState } from 'react';
import '../Components/SampleDropdown/styles.css';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Components/TeachersBill/TeachersBill.css';
const Parts = () => {
	const [isActive, setIsActive] = useState(false);
	const options = ['Part A', 'Part B'];
	const [selected, setSelected] = useState('Select');
	const [inputFields, setInputFields] = useState([
		{
			course: '',
			name: '',
			parts: '',
		},
	]);
	const removeInputFields = (e, index) => {
		e.preventDefault();
		const rows = [...inputFields];
		rows.splice(index, 1);
		setInputFields(rows);
	};
	const handleChange = (evnt, index) => {
		const { name, value } = evnt.target;
		const list = [...inputFields];
		list[index][name] = value;
		setInputFields(list);
	};

	const addInputField = () => {
		setInputFields([
			...inputFields,
			{
				course: '',
				name: '',
				parts: '',
			},
		]);
		// AddDropDownList();
		console.log(inputFields);
	};
	return (
		<div className="container">
			{inputFields.map((data, index) => {
				const { course, name, parts } = data;
				return (
					<div
						className="row"
						key={index}>
						<div className="form-group col-md-3">
							{index === 0 ? <label>Teacher's Name</label> : ''}
							<input
								type="text"
								name="name"
								onChange={(evnt) => handleChange(evnt, index)}
								value={name}
								className="form-control"
								placeholder="Name"
							/>
						</div>
						<div className="form-group col-md-2">
							{index === 0 ? <label>Course ID</label> : ''}
							<input
								type="text"
								name="course"
								onChange={(evnt) => handleChange(evnt, index)}
								value={course}
								className="form-control"
								placeholder="Course"
							/>
						</div>
						<div className="form-group col-md-3">
							{index === 0 ? <label>Part</label> : ''}
							<div className="Dropdown select">
								<div
									className="Dropdown-btn"
									onClick={(e) => setIsActive(!isActive)}>
									{parts}
									<FontAwesomeIcon icon={faCaretDown} />
								</div>
								{isActive && (
									<div className="Dropdown-content">
										{options.map((option, idx) => (
											<div
												key={idx}
												onClick={(e) => {
													setSelected(option);
													setIsActive(false);
												}}
												onChange={(evnt) => handleChange(evnt, index)}
												// parts={selected}
												value={parts}
												className="Dropdown-item">
												{' '}
												{option}
											</div>
										))}
									</div>
								)}
							</div>
						</div>
						<div className="col-md-1 text-center mt-1">
							{inputFields.length !== 1 ? (
								<button
									className="btn-outline-danger add"
									onClick={(evnt) => removeInputFields(evnt, index)}>
									x
								</button>
							) : (
								''
							)}
						</div>
						{inputFields.length - 1 === index && (
							<div className="row">
								<div className="col-sm-1">
									<button
										className="btn-outline-success add"
										onClick={() => addInputField()}
										type="button">
										<i className="fa-sharp fa-solid fa-plus"></i>
									</button>
								</div>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Parts;
