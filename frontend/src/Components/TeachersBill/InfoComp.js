import React, { useState } from 'react';
import TeacherBill from './TeacherBill';
import "./TeachersBill.css";

export const Additions = ({ inputFields, defaultInput, setInputFields }) => {
	console.log(inputFields);
	const addInputField = (e) => {
		e.preventDefault();

		setInputFields([...inputFields, defaultInput]);
	};
	return (
		<button
			className="btn-outline-success add"
			onClick={addInputField}
			type="button">
			<i className="fa-sharp fa-solid fa-plus"></i>
		</button>
	);
};
export const Chairman = ({ inputFields, handleChange, removeInputFields }) => {
	return (
        <div className="Flex-row Row4 Common-info-flex-column">
            {inputFields.map((data, index) => {
                const { institute, department, member } = data;
                return (
                    <div className="row" key={index}>
                        <div className="form-group col">
                            <label>Institute</label>
                            <input
                                type="text"
                                name="institute"
                                onChange={(evnt) => handleChange(index, evnt)}
                                value={institute}
                                className="form-control"
                                id="institute"
                                placeholder="Institute"
                            />
                        </div>
                        <div className="form-group col">
                            <label>Department</label>
                            <input
                                type="text"
                                name="department"
                                onChange={(evnt) => handleChange(index, evnt)}
                                value={department}
                                className="form-control"
                                id="department"
                                placeholder="Department"
                            />
                        </div>
                        <div className="form-group col">
                            <label>Member</label>
                            <input
                                type="text"
                                name="member"
                                onChange={(evnt) => handleChange(index, evnt)}
                                value={member}
                                className="form-control"
                                id="member"
                                placeholder="Member"
                            />
						</div>
                        <div className="col text-center mt-3">
                            {inputFields.length !== 1 ? (
                                <button
                                    className="btn-outline-danger add"
                                    onClick={removeInputFields}
                                >
                                    x
                                </button>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export const Chief = ({ inputFields, handleChange, removeInputFields }) => {
	<div className="cintainer">
		<Chairman
			inputFields={inputFields}
			handleChange={handleChange}
			removeInputFields={removeInputFields}
		/>
		<TeacherBill />
	</div>;
};

// const InfoComp = () => {
// 	return (
// 		<div className="row">
// 			<div className="form-group col-md-3">
// 				<label>Institute</label>
// 				<input
// 					name="institute"
// 					type="text"
// 					className="form-control"
// 					id="institute"
// 				/>col
// 			</div>
// 			<div className="form-group col-md-3">
// 				<label>Department</label>
// 				<input
// 					name="department"
// 					type="text"
// 					className="form-control"
// 					id="department"
// 				/>
// 			</div>
// 			<div className="form-group col-md-3">
// 				<label>Teacher Name</label>
// 				<input
// 					name="name"
// 					type="text"
// 					className="form-control"
// 					id="name"
// 				/>
// 			</div>
// 			<div className="form-group col-md-2">
// 				<label>CourseID</label>
// 				<input
// 					name="course"
// 					type="text"
// 					className="form-control"
// 					id="course"
// 				/>
// 			</div>
// 			<div className="col-md-1">
// 				<button
// 					type="button"
// 					className="add"
// 					//onClick={addFields}
// 				>
// 					<i className="fa-sharp fa-solid fa-plus"></i>
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default InfoComp;
