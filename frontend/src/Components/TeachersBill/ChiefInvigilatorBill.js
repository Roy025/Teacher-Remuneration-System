import React, { useState } from "react";
import Links from "./Links";
import "./TeachersBill.css";
import "./FormButton.css";
import DropdownNoTitleTeacher from "../../Functions/DropdownNoTitleTeacher";

const ChiefInvigilatorBill = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
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

  const [courseOptions, setCourseOptions] = useState([
    { name: "SWE121" },
    { name: "SWE122" },
    { name: "SWE123" },
    { name: "SWE124" },
    { name: "SWE125" },
    { name: "SWE126" },
    { name: "SWE126" },
    { name: "SWE127" },
  ]);

  const [teacherList, setTeacherList] = useState([
    { name: "Dr. Ahsan Habib" },
    { name: "Raihan Ullah" },
    { name: "Saima Sultana" },
    { name: "ParthaPratim Paul" },
    { name: "Fazle Tawsif" },
  ]);

  const [data, setData] = useState([
    {
      courseID: "",
      teacherID: "",
    },
  ]);

  const [termdata, setTermdata] = useState([
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

  // handle session & semester
  const handleSession = (propName, option) => {
    const newData = { ...exam };
    newData.session = option.name;
    setExam(newData);
    setSessionAvailable(true);
  };

  const handleSemester = (propName, option) => {
    const newData = { ...exam };
    newData.semester = option.name;
    setExam(newData);
    setSemesterAvailable(true);
  };

  // Have to update ID
  const handleCourse = (propName, option) => {
    const newData = { ...data };
    newData.courseID = option.name;
    setData(newData);
  };

  return (
    <>
      <Links />
      <div className="FullFormPage">
        <form className="Form">
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

          <div className="FormSubRow">
            <label className="AccountLabel">Courses</label>
            <DropdownNoTitleTeacher
              options={courseOptions}
              propName="course"
              handleData={handleCourse}
              selected={selectedCourse}
              setSelected={setSelectedCourse}
            />
            <label className="AccountLabel">Invigilator</label>
            <DropdownNoTitleTeacher
              options={teacherList}
              propName="teacher"
              handleData={handleSemester}
              selected={selectedSemester}
              setSelected={setSelectedSemester}
            />
          </div>

          <div className="formRow SubmitRow">
            <button type="submit" className="submitButton">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChiefInvigilatorBill;
