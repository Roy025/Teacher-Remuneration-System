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
import TwoField from "../../Functions/TwoField";
import StudentCount from "../../Functions/StudentCount";
import HandleSem from "../../Functions/HandleSem";
import TermPaperComp from "../../Functions/TermPaperComp";

const ChairmanBill = () => {
  const [inputSet, setInputSet] = useState([
    {
      name: "",
      course: "",
    },
  ]);
  const [inputMod, setInputMod] = useState([
    {
      name: "",
      course: "",
    },
  ]);
  const [inputAnsA, setInputAnsA] = useState([
    {
      name: "",
      course: "",
    },
  ]);
  const [inputAnsB, setInputAnsB] = useState([
    {
      name: "",
      course: "",
    },
  ]);
  const [inputTerm, setInputTerm] = useState([
    {
      name: "",
      course: "",
    },
  ]);
  const [inputPrac, setInputPrac] = useState([
    {
      name: "",
      course: "",
    },
  ]);
  const [inputTab, setInputTab] = useState([
    {
      name: "",
      course: "",
    },
  ]);
  const [inputViva, setInputViva] = useState([
    {
      name: "",
      course: "",
    },
  ]);
  const [inputScrA, setInputScrA] = useState([
    {
      name: "",
      course: "",
    },
  ]);
  const [inputScrB, setInputScrB] = useState([
    {
      name: "",
      course: "",
    },
  ]);
  const [inputType, setInputType] = useState([
    {
      name: "",
      course: "",
    },
  ]);
  const [inputInvi, setInputInvi] = useState([
    {
      name: "",
      course: "",
    },
  ]);
  const [inputStudentReg, setInputStudentReg] = useState([
    {
      course: "",
      number: "",
    },
  ]);
  const [exam, setExam] = useState({
    session: "",
    semester: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const submit = async () => {
    console.log(exam);
    console.log(inputSet);
    console.log(inputMod);
    console.log(inputAnsA);
    console.log(inputAnsB);
    console.log(inputScrA);
    console.log(inputScrB);
    console.log(inputTerm);
    console.log(inputTab);
    console.log(inputPrac);
    console.log(inputViva);
    console.log(inputType);
    console.log(inputInvi);
    console.log(inputStudentReg);
  };
  return (
    <>
      <div>
        <Links />
      </div>
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
            <label className="Label"> Question Setting</label>
            <TwoField inputFields={inputSet} setInputFields={setInputSet} />
          </div>
          <div className="formRow">
            <label className="Label">Question Moderation</label>
            <TwoField inputFields={inputMod} setInputFields={setInputMod} />
          </div>
          <div className="formRow">
            <label className="Label">Answerpaper Checking</label>
            <h4 className="subLabel">Part - A</h4>
            <TwoField inputFields={inputAnsA} setInputFields={setInputAnsA} />
            <h4 className="subLabel">Part - B</h4>
            <TwoField inputFields={inputAnsB} setInputFields={setInputAnsB} />
          </div>
          <div className="formRow">
            <label className="Label">Term Test / Internal Assessment</label>
            <TwoField inputFields={inputTerm} setInputFields={setInputTerm} />
          </div>
          <div className="formRow">
            <label className="Label">
              Practical Exam / Sessional Assessment / LAB
            </label>
            <TwoField inputFields={inputPrac} setInputFields={setInputPrac} />
          </div>
          <div className="formRow">
            <label className="Label">Tabulation</label>
            <TwoField
              inputFields={inputTab}
              setInputFields={setInputTab}
            />
          </div>
          <div className="formRow">
            <label className="Label">Viva</label>
            <TwoField inputFields={inputViva} setInputFields={setInputViva} />
          </div>
          <div className="formRow">
            <label className="Label">Scrutiny</label>
            <h4 className="subLabel">Part - A</h4>
            <TwoField inputFields={inputScrA} setInputFields={setInputScrA} />
            <h4 className="subLabel">Part - B</h4>
            <TwoField inputFields={inputScrB} setInputFields={setInputScrB} />
          </div>
          <div className="formRow">
            <label className="Label">
              Term Paper / Seminar Paper / Field Work / MonoGraph / Study Tour /
              Content Analysis / Workshop / Project / Thesis / Internship /
              Research Planning
            </label>
            <TermPaperComp />
          </div>
          <div className="formRow">
            <label className="Label">Question Type</label>
            <TwoField inputFields={inputType} setInputFields={setInputType} />
          </div>
          <div className="formRow">
            <label className="Label">Invigilation</label>
            <TwoField inputFields={inputInvi} setInputFields={setInputInvi} />
          </div>
          <div className="formRow">
            <label className="Label">Student Registration</label>
            <StudentCount
              inputFields={inputStudentReg}
              setInputFields={setInputStudentReg}
            />
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

export default ChairmanBill;
