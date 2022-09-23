import React, { useState } from "react";
import Links from "./Links";
import "./TeachersBill.css";
import Dropdown, {
  semesterOptions,
  semesterTitle,
  sessionTitle,
  sessionOptions,
} from "../SampleDropdown/Dropdown";
import "../SampleDropdown/styles.css";
const DirectorsBill = () => {
  const [inputFields, setInputFields] = useState([
    { institute: "", department: "", member: "" },
  ]);
  const addFields = () => {
    let newfield = { institute: "", department: "", member: "" };
    setInputFields([...inputFields, newfield]);
  };

  return (
    <>
      <div className="Row">
        <Links />

        <form className="col-md-9 Director-form">
          <h1 className="text-center Director-form-title">Directors Bill</h1>
          <div className="Row1 Directors-form-row">
            <div className="form-group col-md-5 Subrow1">
              <Dropdown
                options={semesterOptions}
                dropdownTitle={semesterTitle}
              />
            </div>
            <div className="form-group col-md-5 Subrow1">
              <Dropdown options={sessionOptions} dropdownTitle={sessionTitle} />
            </div>
          </div>
          <div className="form-group Directors-form-row">
            <label>Committe Chairman</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>
          <div className="form-group Directors-form-row">
            <label>Chief Invigilator</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>

          <div
            className="Row4 Directors-form-row"
            // key={index}
          >
            <div className="form-group col-md-4">
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
            <div className="form-group col-md-4">
              <label>Member</label>
              <input
                name="member"
                type="text"
                className="form-control"
                id="member"
              />
            </div>
          </div>
          <div className="col-md-1">
            <button type="button" className="add" onClick={addFields}>
              <i className="fa-sharp fa-solid fa-plus"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DirectorsBill;
