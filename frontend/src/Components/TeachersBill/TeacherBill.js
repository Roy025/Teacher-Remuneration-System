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
      <div>
        <Links />
      </div>
      {/* <div className="row Full-form-page"> */}
      <div className="FullFormPage">
        {/* <Links /> */}
        {/* <form className="col-md-10 Form"> */}
        <form className="Form">
          {/* <h1 className="text-center Form-title">Chairman Bill</h1> */}
          {/* <div className="row"> */}
          <div className="DropdownformRow">
            <div className="FormSubRow">
              {/* <div className="form-group col-md-5"> */}
              <Dropdown
                options={semesterOptions}
                dropdownTitle={semesterTitle}
              />
            </div>
            {/* <div className="form-group col-md-5"> */}
            <div className="FormSubRow">
              <Dropdown options={sessionOptions} dropdownTitle={sessionTitle} />
            </div>
          </div>
          <div className="formRow">
            <label className="Label">Term Test</label>
            <StudentCount />
          </div>
          <div className="formRow">
            <label className="Label">Scrutiny</label>
            <StudentCount />
          </div>
          <div className="formRow">
            <label className="Label">Practical Exam</label>
            <StudentCount />
          </div>
          <div className="formRow">
            <label className="Label">Viva</label>
            <StudentCount />
          </div>
        </form>
      </div>
    </>
  );
};

export default TeacherBill;
