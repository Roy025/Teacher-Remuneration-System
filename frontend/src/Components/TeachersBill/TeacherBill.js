import React, { useState } from "react";
import HandleSem from "../../Functions/HandleSem";
import StudentCount from "../../Functions/StudentCount";
import "./TeachersBill.css";
import "./FormButton.css";
import Dropdown, {
  semesterOptions,
  semesterTitle,
  sessionOptions,
  sessionTitle,
  deptOptions,
} from "../SampleDropdown/Dropdown";
import Links from "./Links";


const TeacherBill = () => {
  const [listOfCourses, setListOfCourses] = useState([{
    id: "",
    code: ""
  }])
  const [termTestData, setTermTestData] = useState([{
    course: {
      id: "",
      code: ""
    },
    numberOfStudents: "",
  }]);
  const [answerPaperCheckingDataPartA, setAnswerPaperCheckingDataPartA] = useState([{
    course: {
      id: "",
      code: ""
    },
    numberOfStudents: "",
  }]);
  const [answerPaperCheckingDataPartB, setAnswerPaperCheckingDataPartB] = useState([{
    course: {
      id: "",
      code: ""
    },
    numberOfStudents: "",
  }]);
  const [scrutinyDataPartA, setScrutinyDataPartA] = useState([{
    course: {
      id: "",
      code: ""
    },
    numberOfStudents: "",
  }]);
  const [scrutinyDataPartB, setScrutinyDataPartB] = useState([{
    course: {
      id: "",
      code: ""
    },
    numberOfStudents: "",
  }]);
  const [practicalExamData, setPracticalExamData] = useState([{
    course: {
      id: "",
      code: ""
    },
    numberOfStudents: "",
  }]);
  const [vivaExamData, setVivaExamData] = useState([{
    course: {
      id: "",
      code: ""
    },
    numberOfStudents: "",
  }]);
  const [selectedDepartment, setSelectedDepartment] = useState([""])
  const [selectedSession, setSelectedSession] = useState([""])
  const [selectedSemester, setSelectedSemester] = useState([""])

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const submit = async () => {
    console.log(termTestData);
    console.log(answerPaperCheckingDataPartA);
    console.log(answerPaperCheckingDataPartB);
    console.log(scrutinyDataPartA);
    console.log(scrutinyDataPartB);
    console.log(practicalExamData);
    console.log(vivaExamData);
    
  }
  return (
    <>
      <div>
        <Links />
      </div>
      <div className="FullFormPage">
        <form className="Form" onSubmit={handleSubmit}>
          <div className="DropdownformRow">
            <div className="FormSubRow1">
              <Dropdown
                options={sessionOptions}
                dropdownTitle={sessionTitle}
                selected={selectedSession}
                setSelected={setSelectedSession}
              />
            </div>
            <div className="FormSubRow1">
              <Dropdown
                options={semesterOptions}
                dropdownTitle={semesterTitle}
                selected={selectedSemester}
                setSelected={setSelectedSemester}
              />
            </div>
            <div className="FormSubRow1">
              <Dropdown
                options={deptOptions}
                dropdownTitle={"Department"}
                selected={selectedDepartment}
                setSelected={setSelectedDepartment}
              />
            </div>
          </div>

          <div className="formRow">
            <label className="Label">Term Test</label>
            <StudentCount
              options={listOfCourses}
              existingData={termTestData}
              setExistingData={setTermTestData}
            />
          </div>

          <div className="formRow">
            <label className="Label">Answerpaper Checking</label>
            <h4 className="subLabel">Part - A</h4>
            <StudentCount
              options={listOfCourses}
              existingData={answerPaperCheckingDataPartA}
              setExistingData={setAnswerPaperCheckingDataPartA}
            />
            <h4 className="subLabel">Part - B</h4>
            <StudentCount
              options={listOfCourses}
              existingData={answerPaperCheckingDataPartB}
              setExistingData={setAnswerPaperCheckingDataPartB}
            />
          </div>

          <div className="formRow">
            <label className="Label">Scrutiny</label>
            <h4 className="subLabel">Part - A</h4>
            <StudentCount
              options={listOfCourses}
              existingData={scrutinyDataPartA}
              setExistingData={setScrutinyDataPartA}
            />
            <h4 className="subLabel">Part - B</h4>
            <StudentCount
              options={listOfCourses}
              existingData={scrutinyDataPartB}
              setExistingData={setScrutinyDataPartB}
            />
          </div>

          <div className="formRow">
            <label className="Label">Practical Exam</label>
            <StudentCount
              options={listOfCourses}
              existingData={practicalExamData}
              setExistingData={setPracticalExamData}
            />
          </div>

          <div className="formRow">
            <label className="Label">Viva</label>
            <StudentCount
              options={listOfCourses}
              existingData={vivaExamData}
              setExistingData={setVivaExamData}
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
}

export default TeacherBill;
