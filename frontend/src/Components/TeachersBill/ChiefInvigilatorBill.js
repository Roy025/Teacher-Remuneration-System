import Links from "./Links";
import "./TeachersBill.css";
import "./FormButton.css";

import Dropdown, {
  semesterOptions,
  semesterTitle,
  sessionTitle,
  sessionOptions,
} from "../SampleDropdown/Dropdown";
import "../SampleDropdown/styles.css";
import HandleSem from "../../Functions/HandleSem";
import { useState } from "react";
import InvigilationComp from "./InvigilationComp";

const ChiefInvigilatorBill = () => {
  const [exam, setExam] = useState({
    session: "",
    semester: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const submit = async () => {
    console.log(exam);
  };
  return (
    <>
      <Links />
      <div className="FullFormPage">
        <form className="Form" onSubmit={handleSubmit}>
          <div className="DropdownformRow">
            <div className="FormSubRow">
              <Dropdown
                options={semesterOptions}
                dropdownTitle={semesterTitle}
                handleData={(child) => HandleSem(child, exam, setExam)}
              />
            </div>
            <div className="FormSubRow">
              <Dropdown
                options={sessionOptions}
                dropdownTitle={sessionTitle}
                handleData={(child) => HandleSem(child, exam, setExam)}
              />
            </div>
          </div>

          <div className="formRow">
            <label className="Label">Invigilation</label>
            <InvigilationComp tag={"Invigilator's name"} />
          </div>
          <div className="formRow SubmitRow">
            <button type="submit" className="submitButton" onClick={submit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChiefInvigilatorBill;
