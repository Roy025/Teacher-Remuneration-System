import React, { useState } from "react";
import StudentCount from "../../Functions/StudentCount";
import "./TeachersBill.css";
import "./FormButton.css";
import Links from "./Links";
import DropdownNoTitleTeacher from "../../Functions/DropdownNoTitleTeacher";
import { useMutation, useQuery } from "@tanstack/react-query";
import { instance as axios } from "../axios";

const TeacherBill = () => {
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

  const [departmentList, setDepartmentList] = useState([]);
  const [instituteList, setInstituteList] = useState([]);

  const [sessionAvailable, setSessionAvailable] = useState(false);
  const [semesterAvailable, setSemesterAvailable] = useState(false);
  const [departmentAvailable, setDepartmentAvailable] = useState(false);
  const [insTituteAvailable, setInsTituteAvailable] = useState(false);

  const [exam, setExam] = useState({
    deptID: "",
    session: "",
    semester: "",
    department: "",
    institute: "",
  });

  const [listOfCourses, setListOfCourses] = useState([{}]);
  const [termTestData, setTermTestData] = useState([
    {
      course: {
        id: "",
        code: "",
      },
      numberOfStudents: "",
    },
  ]);
  const [answerPaperCheckingDataPartA, setAnswerPaperCheckingDataPartA] =
    useState([
      {
        course: {
          id: "",
          code: "",
        },
        numberOfStudents: "",
      },
    ]);
  const [answerPaperCheckingDataPartB, setAnswerPaperCheckingDataPartB] =
    useState([
      {
        course: {
          id: "",
          code: "",
        },
        numberOfStudents: "",
      },
    ]);
  const [scrutinyDataPartA, setScrutinyDataPartA] = useState([
    {
      course: {
        id: "",
        code: "",
      },
      numberOfStudents: "",
    },
  ]);
  const [scrutinyDataPartB, setScrutinyDataPartB] = useState([
    {
      course: {
        id: "",
        code: "",
      },
      numberOfStudents: "",
    },
  ]);
  const [practicalExamData, setPracticalExamData] = useState([
    {
      course: {
        id: "",
        code: "",
      },
      numberOfStudents: "",
    },
  ]);
  const [vivaExamData, setVivaExamData] = useState([
    {
      course: {
        id: "",
        code: "",
      },
      numberOfStudents: "",
    },
  ]);
  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState([""]);
  const [selectedSession, setSelectedSession] = useState([""]);
  const [selectedSemester, setSelectedSemester] = useState([""]);

  //handle semester and session

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

  const handleInstitute = (propName, option) => {
    const newData = { ...exam };
    newData.institute = option.name;
    newData.deptID = option.id;
    setExam(newData);
    setInsTituteAvailable(true);
  };

  const handleDepartment = (propName, option) => {
    const newData = { ...exam };
    newData.department = option;
    newData.deptID = option.id;
    setExam(newData);
    setDepartmentAvailable(true);
  };

  //Fetching institute data
  const fetchInstitute = async () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("accesstoken"),
      },
    };
    const response = await axios.get("/institute", config);
    return response;
  };

  useQuery(["institution-list"], async () => {
    const store = await fetchInstitute();
    setInstituteList(store.data.data);
    return store;
  });

  //Fetching department data

  const fetchDept = async (id) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("accesstoken"),
      },
    };
    const response = await axios.get(
      `/department?institute=${exam.deptID}`,
      config
    );
    console.log(response);
    setDepartmentList(response.data.data);
    return response;
  };
  useQuery(["dept-list"], () => fetchDept(), {
    enabled: !!insTituteAvailable,
  });

  //Fetching course data

  const fetchCourse = async () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("accesstoken"),
      },
    };
    const response = await axios.get(
      `/Exam/teacher/course?Semester=${selectedSemester}&Session=${selectedSession}&DepartmentId=${exam.deptID}`,
      config
    );
    console.log(response);
    setListOfCourses(response.data.data)
    return response;
  };
  useQuery(["nohomo-list"], () => fetchCourse(), {
    enabled: !!sessionAvailable && !!semesterAvailable && !!departmentAvailable,
  });

  //put teacher form
  const addTeacherForm = async (info) => {
    console.log(info);
    const config = {
      headers: {
        Authorization: localStorage.getItem("accesstoken"),
      },
    };
    const response = await axios.put("/Exam/teacher", info, config);
    console.log(response);
    return response;
  };

  const {
    mutate: TeacherMutate,
    isError,
    error,
  } = useMutation(addTeacherForm, {
    onSuccess: (success) => {
      console.log(success);
      window.location.reload(false);
    },
  });
  if (isError) {
    console.log(error);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const submit = async () => {
  //   console.log(termTestData);
  //   console.log(answerPaperCheckingDataPartA);
  //   console.log(answerPaperCheckingDataPartB);
  //   console.log(scrutinyDataPartA);
  //   console.log(scrutinyDataPartB);
  //   console.log(practicalExamData);
  //   console.log(vivaExamData);
  // };
  return (
    <>
      <div>
        <Links />
      </div>
      <div className="FullFormPage">
        <form className="Form" onSubmit={handleSubmit}>
          <div className="DropdownformRow">
            <div className="FormSubRow">
              <label className="Label">Institute</label>
              <DropdownNoTitleTeacher
                options={instituteList}
                propName="institute"
                handleData={handleInstitute}
                selected={selectedInstitute}
                setSelected={setSelectedInstitute}
              />
            </div>
            <div className="FormSubRow">
              <label className="Label">Department</label>
              <DropdownNoTitleTeacher
                options={departmentList}
                propName="department"
                handleData={handleDepartment}
                selected={selectedDepartment}
                setSelected={setSelectedDepartment}
              />
            </div>
          </div>
          <div className="DropdownformRow">
            <div className="FormSubRow">
              <label className="Label">Session</label>
              <DropdownNoTitleTeacher
                options={sessionOptions}
                propName="session"
                handleData={handleSession}
                selected={selectedSession}
                setSelected={setSelectedSession}
              />
            </div>
            <div className="FormSubRow">
              <label className="Label">Semester</label>
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
            <label className="Label">Term Test</label>
            <StudentCount
              options={listOfCourses.termTestCourses}
              existingData={termTestData}
              setExistingData={setTermTestData}
            />
          </div>

          <div className="formRow">
            <label className="Label">Answerpaper Checking</label>
            <h4 className="subLabel">Part - A</h4>
            <StudentCount
              options={listOfCourses.answerPaperCheckingPartACourses}
              existingData={answerPaperCheckingDataPartA}
              setExistingData={setAnswerPaperCheckingDataPartA}
            />
            <h4 className="subLabel">Part - B</h4>
            <StudentCount
              options={listOfCourses.answerPaperCheckingPartBCourses}
              existingData={answerPaperCheckingDataPartB}
              setExistingData={setAnswerPaperCheckingDataPartB}
            />
          </div>

          <div className="formRow">
            <label className="Label">Scrutiny</label>
            <h4 className="subLabel">Part - A</h4>
            <StudentCount
              options={listOfCourses.scrutinyCoursesPartA}
              existingData={scrutinyDataPartA}
              setExistingData={setScrutinyDataPartA}
            />
            <h4 className="subLabel">Part - B</h4>
            <StudentCount
              options={listOfCourses.scrutinyCoursesPartB}
              existingData={scrutinyDataPartB}
              setExistingData={setScrutinyDataPartB}
            />
          </div>

          <div className="formRow">
            <label className="Label">Practical Exam</label>
            <StudentCount
              options={listOfCourses.practicalExamCourses}
              existingData={practicalExamData}
              setExistingData={setPracticalExamData}
            />
          </div>

          <div className="formRow">
            <label className="Label">Viva</label>
            <StudentCount
              options={listOfCourses.vivaExamCourses}
              existingData={vivaExamData}
              setExistingData={setVivaExamData}
            />
          </div>

          <div className="formRow SubmitRow">
            <button
              type="submit"
              className="submitButton"
              onClick={() =>
                TeacherMutate({
                  session: selectedSession,
                  semester: selectedSemester,
                  department: exam.department,
                  termTestData: termTestData[0].course.id === "" ? undefined : termTestData,
                  answerPaperCheckingDataPartA: answerPaperCheckingDataPartA[0].course.id === "" ? undefined : answerPaperCheckingDataPartA,
                  answerPaperCheckingDataPartA: answerPaperCheckingDataPartB[0].course.id === "" ? undefined : answerPaperCheckingDataPartB,
                  scrutinyDataPartA: scrutinyDataPartA[0].course.id === "" ? undefined : scrutinyDataPartA,
                  scrutinyDataPartB: scrutinyDataPartB[0].course.id === "" ? undefined : scrutinyDataPartB,
                  practicalExamData: practicalExamData[0].course.id === "" ? undefined : practicalExamData,
                  vivaExamData: vivaExamData[0].course.id === "" ? undefined : vivaExamData,
                })
              }
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TeacherBill;
