import React, { useState } from "react";
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
import TwoField from "../../Functions/TwoField";
import StudentCount from "../../Functions/StudentCount";
import HandleSem from "../../Functions/HandleSem";
import TermPaperComp from "../../Functions/TermPaperComp";
import ThesisComp from "../../Functions/ThesisComp";
import ThreeFields from "../../Functions/ThreeFields";

const ChairmanBill = () => {
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [listOfInstitutes, setListOfInstitutes] = useState([
    { id: "1", name: "SUST" },
    { id: "2", name: "BRAC" },]);
  const [listOfTeachers, setListOfTeachers] = useState([
    { id: "1", name: "Nihal" },
    { id: "2", name: "Muna" },]);
  const [listOfCourses, setListOfCourses] = useState(
    [
      {
        id: "1", title: "", code: "SWE321"
      }, {
        id: "2", title: "", code: "SWE322"
      }
    ]);
  const [listOfQuestionSetters, setListOfQuestionSetters] = useState([
    {
      course: {
        id: "",
        title: "",
        code: ""
      },
      teacher: {
        id: "",
        name: "",
      },
    },
  ]);
  const [listOfQuestionModerators, setListOfQuestionModerators] = useState([{
    course: {
      id: "",
      title: "",
      code: ""
    },
    teacher: {
      id: "",
      name: "",
    },
  }]);
  const [listOfAnswerpaperCheckersPartA, setListOfAnswerpaperCheckersPartA] = useState([{
    course: {
      id: "",
      title: "",
      code: ""
    },
    teacher: {
      id: "",
      name: "",
    },
  }]);
  const [listOfAnswerpaperCheckersPartB, setListOfAnswerpaperCheckersPartB] = useState([{
    course: {
      id: "",
      title: "",
      code: ""
    },
    teacher: {
      id: "",
      name: "",
    },
  }]);
  const [listOfTermTestAnswerCheckers, setListOfTermTestAnswerCheckers] = useState([{
    course: {
      id: "",
      title: "",
      code: ""
    },
    teacher: {
      id: "",
      name: "",
    },
  }]);
  const [listOfLabExaminer, setListOfLabExaminer] = useState([{
    course: {
      id: "",
      title: "",
      code: ""
    },
    teacher: {
      id: "",
      name: "",
    },
  }]);
  const [listOfTabulators, setListOfTabulators] = useState([{
    course: {
      id: "",
      title: "",
      code: ""
    },
    teacher: {
      id: "",
      name: "",
    },
  }]);
  const [listOfVivaExaminers, setListOfVivaExaminers] = useState([{
    course: {
      id: "",
      title: "",
      code: ""
    },
    teacher: {
      id: "",
      name: "",
    },
  }]);
  const [listOfScrutinizersPartA, setListOfScrutinizersPartA] = useState([{
    course: {
      id: "",
      title: "",
      code: ""
    },
    teacher: {
      id: "",
      name: "",
    },
  }]);
  const [listOfScrutinizersPartB, setListOfScrutinizersPartB] = useState([{
    course: {
      id: "",
      title: "",
      code: ""
    },
    teacher: {
      id: "",
      name: "",
    },
  }]);
  const [listOfQuestionTypers, setListOfQuestionTypers] = useState([{
    course: {
      id: "",
      title: "",
      code: ""
    },
    teacher: {
      id: "",
      name: "",
    },
  }]);
  const [listOfInvigilators, setListOfInvigilators] = useState([{ id: "", name: "", department: "", institute: "" }]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const submit = async () => {
    const body = {
      session: selectedSession,
      semester: selectedSemester,
      questionSetters: listOfQuestionSetters,
      questionModerators: listOfQuestionModerators,
      answerpaperCheckersPartA: listOfAnswerpaperCheckersPartA,
      answerpaperCheckersPartB: listOfAnswerpaperCheckersPartB,
      termTestAnswerCheckers: listOfTermTestAnswerCheckers,
      labExaminer: listOfLabExaminer,
      tabulators: listOfTabulators,
      vivaExaminers: listOfVivaExaminers,
      scrutinizersPartA: listOfScrutinizersPartA,
      scrutinizersPartB: listOfScrutinizersPartB,
      questionTypers: listOfQuestionTypers,
      invigilators: listOfInvigilators,
    }
    console.log(body);
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
                options={sessionOptions}
                dropdownTitle={sessionTitle}
                selected={selectedSession}
                setSelected={setSelectedSession}
              />
            </div>

            <div className="FormSubRow">
              <Dropdown
                options={semesterOptions}
                dropdownTitle={semesterTitle}
                selected={selectedSemester}
                setSelected={setSelectedSemester}
              />
            </div>
          </div>

          <div className="formRow">
            <label className="Label"> Question Setting</label>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              // handleData={handleData}
              existingData={listOfQuestionSetters}
              setExistingData={setListOfQuestionSetters}
            />
          </div>

          <div className="formRow">
            <label className="Label"> Question Moderation</label>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              // handleData={handleData}
              existingData={listOfQuestionModerators}
              setExistingData={setListOfQuestionModerators}
            />
          </div>

          <div className="formRow">
            <label className="Label">Answerpaper Checking</label>
            <h4 className="subLabel">Part - A</h4>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              // handleData={handleData}
              existingData={listOfAnswerpaperCheckersPartA}
              setExistingData={setListOfAnswerpaperCheckersPartA}
            />

            <h4 className="subLabel">Part - B</h4>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              // handleData={handleData}
              existingData={listOfAnswerpaperCheckersPartB}
              setExistingData={setListOfAnswerpaperCheckersPartB}
            />
          </div>

          <div className="formRow">
            <label className="Label">Term Test / Internal Assessment</label>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              // handleData={handleData}
              existingData={listOfTermTestAnswerCheckers}
              setExistingData={setListOfTermTestAnswerCheckers}
            />
          </div>

          <div className="formRow">
            <label className="Label">Practical Exam / Sessional Assessment / LAB</label>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              // handleData={handleData}
              existingData={listOfLabExaminer}
              setExistingData={setListOfLabExaminer}
            />
          </div>

          <div className="formRow">
            <label className="Label">Tabulation</label>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              // handleData={handleData}
              existingData={listOfTabulators}
              setExistingData={setListOfTabulators}
            />
          </div>

          <div className="formRow">
            <label className="Label">Viva</label>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              // handleData={handleData}
              existingData={listOfVivaExaminers}
              setExistingData={setListOfVivaExaminers}
            />
          </div>

          <div className="formRow">
            <label className="Label">Scrutiny</label>
            <h4 className="subLabel">Part - A</h4>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              // handleData={handleData}
              existingData={listOfScrutinizersPartA}
              setExistingData={setListOfScrutinizersPartA}
            />
            <h4 className="subLabel">Part - B</h4>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              // handleData={handleData}
              existingData={listOfScrutinizersPartB}
              setExistingData={setListOfScrutinizersPartB}
            />
          </div>

          {/* <div className="formRow">
            <label className="Label">
              Term Paper / Seminar Paper / Field Work / MonoGraph / Study Tour /
              Content Analysis / Workshop / Project / Thesis(Under-graduate) /
              Internship / Research Planning
            </label>
            <TermPaperComp TermPaper={TermPaper} setTermPaper={setTermPaper} />
          </div> */}

          <div className="formRow">
            <label className="Label">Question Type</label>
            <TwoField
              courses={listOfCourses}
              teachers={listOfTeachers}
              // handleData={handleData}
              existingData={listOfQuestionTypers}
              setExistingData={setListOfQuestionTypers}
            />
          </div>

          <div className="formRow">
            <label className="Label">Invigilation</label>
            <ThreeFields
              options={listOfInstitutes}
              propName="members"
              existingData={listOfInvigilators}
              setExistingData={setListOfInvigilators}
            />
          </div>

          {/* <div className="formRow">
            <label className="Label">Thesis(Post-graduate)</label>
            <ThesisComp
              inputVivaBoard={inputVivaBoard}
              setVivaBoard={setVivaBoard}
              inputThesisSuper={inputThesisSuper}
              setThesisSuper={setThesisSuper}
              inputThesisCoSuper={inputThesisCoSuper}
              setThesisCoSuper={setThesisCoSuper}
              inputThesisAssess={inputThesisAssess}
              setThesisAssess={setThesisAssess}
              inputThesisManagers={inputThesisManagers}
              setThesisManagers={setThesisManagers}
              localTeacherDB={localTeacherDB}
            />
          </div> */}

          {/* <div className="formRow">
            <label className="Label">Student Registration</label>
            <StudentCount
              inputFields={inputStudentReg}
              setInputFields={setInputStudentReg}
            />
          </div>  */}

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
