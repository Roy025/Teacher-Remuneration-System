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
import ThreeFieldsNoAdd from "../../Functions/ThreeFieldsNoAdd";
import ThreeFields from "../../Functions/ThreeFields";

const DirectorsBill = () => {
  const [inputFields, setInputFields] = useState([
    {
      institute: "",
      department: "",
      member: "",
    },
  ]);
  const defaultInput = {
    institute: "",
    department: "",
    member: "",
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };
  const removeInputFields = (e, index) => {
    e.preventDefault();
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  return (
    <>
      <div>
        <Links />
      </div>

      {/* <div className="Row Full-form-page"> */}
      <div className="FullFormPage">
        {/* <Links /> */}
        {/* <form className="col-md-9 Form"> */}
        <form className="Form">
          {/* <h1 className="text-center Form-title">Directors Bill</h1> */}
          <div className="DropdownformRow">
            <div className="FormSubRow">
              <Dropdown
                options={semesterOptions}
                dropdownTitle={semesterTitle}
              />
            </div>

            <div className="FormSubRow">
              <Dropdown options={sessionOptions} dropdownTitle={sessionTitle} />
            </div>
          </div>
          {/* <div className="form-group Form-row"> */}
          <div className="formRow">
            <label className="Label">Committee Chairman</label>
            <ThreeFieldsNoAdd />
          </div>
          {/* <div className="form-group Form-row"> */}
          <div className="formRow">
            <label className="Label">Chief Invigilator</label>
            <ThreeFieldsNoAdd />
          </div>

          <div className="formRow">
            <label className="Label">Committee Members</label>
            <ThreeFields
              inputFields={inputFields}
              handleChange={handleChange}
              removeInputFields={removeInputFields}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default DirectorsBill;
