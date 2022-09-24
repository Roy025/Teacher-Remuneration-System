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
import InfoComp from "./InfoComp";
import TeacherBill from "./TeacherBill";

const ChairmanBill = () => {
  const [inputFields, setInputFields] = useState([
    { institute: "", department: "", member: "" },
  ]);
  const addFields = () => {
    let newfield = { institute: "", department: "", member: "" };
    setInputFields([...inputFields, newfield]);
  };
  return (
    <>
      <div className="row Full-form-page">
        <Links />
        <form className="col-md-10 Form">
          <h1 className="text-center Form-title">Chairman Bill</h1>
          <div className="row">
            <div class="form-group col-md-5">
              <Dropdown
                options={semesterOptions}
                dropdownTitle={semesterTitle}
              />
            </div>
            <div class="form-group col-md-5">
              <Dropdown options={sessionOptions} dropdownTitle={sessionTitle} />
            </div>
          </div>
          <h3>Question Type</h3>
          <TeacherBill />
          <h3>Question Setter</h3>
          <InfoComp />
          <h3>Examiner</h3>
          <h4>Part - A</h4>
          <InfoComp />
          <h4>Part - B</h4>
          <InfoComp />
          <h3>Scrutinizer</h3>
          <h4>Part - A</h4>
          <InfoComp />
          <h4>Part - B</h4>
          <InfoComp />
          <h3>Tabulation</h3>
          <InfoComp />
          <h3>Practical Exam</h3>
          <InfoComp />
          <h3>Student Registration</h3>
          <div className="row">
            <div class="form-group col-md-3">
              <label for="exampleFormControlInput1">CourseID</label>
              <input
                name="course"
                type="text"
                class="form-control"
                id="course"
              />
            </div>
            <div class="form-group col-md-3">
              <label for="exampleFormControlInput1">
                Registered Student Count
              </label>
              <input
                name="number"
                type="text"
                class="form-control"
                id="number"
              />
            </div>

            <div class="col-md-1">
              <button type="button" class="add" onClick={addFields}>
                <i class="fa-sharp fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChairmanBill;
