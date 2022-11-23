import React, { useState } from "react";
import DropdownNoTitleTeacher from "../../../Functions/DropdownNoTitleTeacher";
import { useMutation, useQuery } from "@tanstack/react-query";
import { instance as axios } from "../../axios";
import "./CreateCourse.css";

function CreateCourse() {
  // Store things
  const [instituteList, setInstituteList] = useState([]);
  const [deptList, setDeptList] = useState([]);
  const [creditList, setCreditList] = useState([
    {
      name: 1,
    },
    {
      name: 1.5,
    },
    {
      name: 2,
    },
    {
      name: 3,
    },
    {
      name: 4,
    },
    {
      name: 18,
    },
  ]);
  const [typeList, setTypeList] = useState([
    {
      name: "Lab",
    },
    {
      name: "Theory",
    },
    {
      name: "TermPaper",
    },
  ]);
  const [levelList, setLevelList] = useState([
    {
      name: "Undergrad",
    },
    {
      name: "Postgrad",
    },
  ]);
  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedCredit, setSelectedCredit] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [insTituteAvailable, setInsTituteAvailable] = useState(false);
  const [DeptAvailable, setDeptAvailable] = useState(false);
  const [data, setData] = useState({
    id: "",
    institute: "",
    department: "",
    courses: [
      {
        departmentId: "",
        code: "",
        title: "",
        credit: 0,
        type: "",
        level: "",
      },
    ],
  });

  const [courseList, setCourseList] = useState([]);

  //Fetching institute data
  const fetchInstitute = async () => {
    const response = await axios.get("/institute");
    return response;
  };

  useQuery(["institution-list"], async () => {
    const store = await fetchInstitute();
    setInstituteList(store.data.data);
    return store;
  });

  //Fetching department data

  const fetchDept = async (id) => {
    const response = await axios.get(`/department?institute=${id}`);
    console.log(response);
    setDeptList(response.data.data);
    return response;
  };
  useQuery(["dept-list", data.id], () => fetchDept(data.id), {
    enabled: !!insTituteAvailable,
  });

  //Fetching course data

  const fetchCourse = async (id) => {
    const response = await axios.get(`/course?department=${id}`);
    console.log(response);
    setCourseList(response.data.data);
    return response;
  };
  useQuery(["course-list", data.id], () => fetchCourse(data.id), {
    enabled: !!DeptAvailable,
  });

  //Add new course

  const addCourses = async (info) => {
    console.log(info.courses);
    const response = await axios.post("/Admin/course/create", info.courses);
    console.log(response);
    return response;
  };

  const {
    mutate: CourseMutate,
    isError,
    error,
  } = useMutation(addCourses, {
    onSuccess: (success) => {
      console.log(success);
      window.location.reload(false);
    },
  });
  if (isError) {
    console.log(error);
  }

  // Handle institute data

  const handleInstitute = (propName, option) => {
    const newData = { ...data };
    newData.institute = option.institute;
    newData.id = option.id;
    setInsTituteAvailable(true);
    setData(newData);
  };

  // Handle department data

  const handleDepartment = (propName, option) => {
    const newData = { ...data };
    newData.department = option.department;
    newData.id = option.id;
    setDeptAvailable(true);
    setData(newData);
  };

  // handle course data

  const handlecode = (e, index) => {
    const { name, value } = e.target;
    const newData = { ...data };
    newData.courses[index].code = value;
    setData(newData);
  };

  const handletitle = (e, index) => {
    const { name, value } = e.target;
    const newData = { ...data };
    newData.courses[index].title = value;
    newData.courses[index].departmentId = data.id;
    setData(newData);
  };

  const handleCredit = (propName, option, currentIndex) => {
    const newData = { ...data };
    newData.courses[currentIndex].credit = option.name;
    setData(newData);
  };

  const handleType = (propName, option, currentIndex) => {
    const newData = { ...data };
    newData.courses[currentIndex].type = option.name;
    setData(newData);
  };

  const handleLevel = (propName, option, currentIndex) => {
    const newData = { ...data };
    newData.courses[currentIndex].level = option.name;
    setData(newData);
    console.log(data);
  };

  const addcourses = () => {
    const newData = { ...data };
    newData.courses.push({
      departmentId: "",
      code: "",
      title: "",
      credit: 0,
      type: "",
      level: "",
    });
    setData(newData);
  };

  const deletecourses = (index) => {
    const newData = { ...data };
    newData.courses.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="CourseWrap">
      <div className="CourseEnterContainer">
        <h1 className="AccountHeader">Create Courses</h1>
        <div className="CoursePeriodSelect">
          <div className="AccountInputFields">
            <label className="AccountLabel">Institute</label>
            <DropdownNoTitleTeacher
              options={instituteList}
              propName="institute"
              handleData={handleInstitute}
              selected={selectedInstitute}
              setSelected={setSelectedInstitute}
            />
          </div>
          <div className="AccountInputFields">
            <label className="AccountLabel">Department</label>
            <DropdownNoTitleTeacher
              options={deptList}
              propName="department"
              handleData={handleDepartment}
              selected={selectedDept}
              setSelected={setSelectedDept}
            />
          </div>
        </div>

        {data.courses.map((info, index) => {
          return (
            <div className="InsedCourseInputWrap">
              <div className="InsideCourseContainer" key={index}>
                <div className="AccountInputFields">
                  {index === 0 && (
                    <label className="AccountLabel">Course Code</label>
                  )}
                  <input
                    type="text"
                    name="code"
                    onChange={(evnt) => handlecode(evnt, index)}
                    value={data.courses.code}
                    className="AccountInput"
                    placeholder="Course Code"
                  />
                </div>
                <div className="AccountInputFields">
                  {index === 0 && (
                    <label className="AccountLabel">Course Title</label>
                  )}
                  <input
                    type="text"
                    name="title"
                    onChange={(evnt) => handletitle(evnt, index)}
                    value={data.courses.title}
                    className="AccountInput"
                    placeholder="Course Title"
                  />
                </div>
                <div className="AccountInputFields">
                  {index === 0 && (
                    <label className="AccountLabel">Credit</label>
                  )}
                  <DropdownNoTitleTeacher
                    options={creditList}
                    propName="credit"
                    handleData={handleCredit}
                    selected={selectedCredit}
                    setSelected={setSelectedCredit}
                    index={index}
                  />
                </div>
                <div className="AccountInputFields">
                  {index === 0 && (
                    <label className="AccountLabel">Course Type</label>
                  )}
                  <DropdownNoTitleTeacher
                    options={typeList}
                    propName="type"
                    handleData={handleType}
                    selected={selectedType}
                    setSelected={setSelectedType}
                    index={index}
                  />
                </div>
                <div className="AccountInputFields">
                  {index === 0 && (
                    <label className="AccountLabel">Course Level</label>
                  )}
                  <DropdownNoTitleTeacher
                    options={levelList}
                    propName="level"
                    handleData={handleLevel}
                    selected={selectedLevel}
                    setSelected={setSelectedLevel}
                    index={index}
                  />
                </div>
              </div>

              {data.courses.length !== 1 && (
                <button
                  className="AdminButton"
                  onClick={() => deletecourses(index)}
                >
                  Remove
                </button>
              )}
              <div className="InsideAccountContainer">
                {index === data.courses.length - 1 && (
                  <button className="AdminButton" onClick={() => addcourses()}>
                    Add
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <button
          className="AdminButton AdminSubmit"
          onClick={() =>
            CourseMutate({
              courses: data.courses,
            })
          }
        >
          Submit
        </button>
      </div>
      <div className="ViewCoursesWrap">
        <h1 className="AccountHeader">View Existing Courses</h1>
        <div className="ViewCoursesContainer">
          {courseList.map((info, ind) => {
            return (
              <div className="ViewCourseCard">
                <h3 className="ViewTeacherName">{info.code}</h3>
                <h4 className="ViewTeacherInfo">{info.title}</h4>
                <h4 className="ViewTeacherInfo">Total credit: {info.credit}</h4>
                <h4 className="ViewTeacherInfo">
                  {info.level} {info.type} Course
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
