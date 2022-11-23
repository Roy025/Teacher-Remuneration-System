import React, { useState } from "react";
import Links from "./Links";
import "./TeachersBill.css";
import "./FormButton.css";
import DropdownNoTitleTeacher from "../../Functions/DropdownNoTitleTeacher";

const ChiefInvigilatorBill = () => {

  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [sessionOptions, setSessionOptions] = useState([
    { name: "2016-17" },
    { name: "2017-18" },
    { name: "2018-19" },
    { name: "2019-20" },
    { name: "2020-21" },
  ]);

  const [semesterOptions, setSemesterOptions] = useState([
    { name: "1st" },
    { name: "2nd" },
    { name: "3rd" },
    { name: "4th" },
    { name: "5th" },
    { name: "6th" },
    { name: "7th" },
    { name: "8th" },
  ]);

  const [data, setData] = useState([
    {
      courseID: "",
      teacherID: "",
    },
  ]);

  const [sessionAvailable, setSessionAvailable] = useState(false);
  const [semesterAvailable, setSemesterAvailable] = useState(false);

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

  // handle session & semester
  const handleSession = (propName, option) => {
    const newData = { ...data };
    newData.session = option.name;
    setData(newData);
    setSessionAvailable(true)
  };

  const handleSemester = (propName, option) => {
    const newData = { ...data };
    newData.semester = option.name;
    setData(newData);
    setSemesterAvailable(true)
  };


  return (
    <>
      <Links />
      <div className="FullFormPage">
        <form className="Form" onSubmit={handleSubmit}>
          <div className="DropdownformRow">
            <div className="FormSubRow">
              <label className="AccountLabel">Session</label>
              <DropdownNoTitleTeacher
                options={sessionOptions}
                propName="session"
                handleData={handleSession}
                selected={selectedSession}
                setSelected={setSelectedSession}
              />
            </div>
            <div className="FormSubRow">
              <label className="AccountLabel">Semester</label>
              <DropdownNoTitleTeacher
                options={semesterOptions}
                propName="semester"
                handleData={handleSemester}
                selected={selectedSemester}
                setSelected={setSelectedSemester}
              />
            </div>
          </div>

          <div className="formRow">
            <label className="Label">Invigilation</label>
            
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
