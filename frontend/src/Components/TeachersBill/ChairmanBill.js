import React, { useState } from "react";
// import { ReactDOM } from "react-dom";
import Links from "./Links";
import "./TeachersBill.css";
import Dropdown, {
  semesterOptions,
  semesterTitle,
  sessionTitle,
  sessionOptions,
} from "../SampleDropdown/Dropdown";
import "../SampleDropdown/styles.css";
import FourField from "../../Functions/TwoField";
import StudentCount from "../../Functions/StudentCount";

const ChairmanBill = () => {
  const [inputFields, setInputFields] = useState([
    {
      course: "",
      number: "",
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
  return (
    <>
      <div>
        <Links />
      </div>
      <div className="row Full-form-page">
        {/* <Links /> */}
        <form className="col-md-10 Form">
          {/* <h1 className="text-center Form-title">Chairman Bill</h1> */}
          <div className="row">
            <div className="form-group col-md-5">
              <Dropdown
                options={semesterOptions}
                dropdownTitle={semesterTitle}
              />
            </div>
            <div className="form-group col-md-5">
              <Dropdown options={sessionOptions} dropdownTitle={sessionTitle} />
            </div>
          </div>

          <h3>
            <b>01. Question Setting</b>
          </h3>
          <FourField />
          <h3>
            <b>02. Question Moderation</b>
          </h3>
          <FourField />
          <h3>
            <b>03. Answerpaper Checking</b>
          </h3>
          <h4>Part - A</h4>
          <FourField />
          <h4>Part - B</h4>
          <FourField />
          <h3>
            <b>04. Term Test / Internal Assessment</b>
          </h3>
          <FourField />
          <h3>
            <b>05. Practical Exam / Sessional Assessment / LAB</b>
          </h3>
          <FourField />
          <h3>
            <b>06. Tabulation</b>
          </h3>
          <h4>RPS Exam System</h4>
          <FourField />
          <h4>ORPS Exam System</h4>
          <FourField />
          <h3>
            <b>07. Viva</b>
          </h3>
          <FourField />
          <h3>
            <b>08. Scrutiny</b>
          </h3>
          <FourField />
          <h3>
            <b>09. Term PAPER</b>
          </h3>
          <h3>
            <b>10. Question Type</b>
          </h3>
          <FourField />
          <h3>
            <b>11. </b>
          </h3>
          <FourField />
          <h3>
            <b>12. Student Registration</b>
          </h3>
          <StudentCount />
        </form>
      </div>
    </>
  );
};

export default ChairmanBill;
