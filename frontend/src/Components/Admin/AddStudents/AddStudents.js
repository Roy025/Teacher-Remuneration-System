import React, { useState } from "react";
import DropdownNoTitleTeacher from "../../../Functions/DropdownNoTitleTeacher";
import { useMutation, useQuery } from "@tanstack/react-query";
import { instance as axios } from "../../axios";
import "./AddStudents.css";

function AddStudents() {
  const [instituteList, setInstituteList] = useState([]);
  const [deptList, setDeptList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [selectedDept, setSelectedDept] = useState("");
  const [insTituteAvailable, setInsTituteAvailable] = useState(false);
  const [DeptAvailable, setDeptAvailable] = useState(false);

  const [data, setData] = useState({
    id: "",
    institute: "",
    department: "",
    students: [
      {
        registraionNo: "",
        departmentId: "",
      },
    ],
  });

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
    setDeptList(response.data.data);
    return response;
  };
  useQuery(["dept-list", data.id], () => fetchDept(data.id), {
    enabled: !!insTituteAvailable,
  });

  //Fetching student data

  const fetchStudents = async (id) => {
    const response = await axios.get(`/student?department=${id}`);
    setStudentList(response.data.data);
    return response;
  };
  useQuery(["student-list", data.id], () => fetchStudents(data.id), {
    enabled: !!DeptAvailable,
  });

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

  //Add new student

  const addStudents = async (info) => {
    console.log(info.students);
    const response = await axios.post("/Admin/student/register", info.students);
    console.log(response);
    return response;
  };

  const {
    mutate: StudentMutate,
    isError,
    error,
  } = useMutation(addStudents, {
    onSuccess: (success) => {
      console.log(success);
      window.location.reload(false);
    },
  });
  if (isError) {
    console.log(error);
  }

  // Handle students ID

  const handleID = (e, index) => {
    const { name, value } = e.target;
    const newData = { ...data };
    newData.students[index].registraionNo = value;
    newData.students[index].departmentId = newData.id;
    setData(newData);
  };

  const addID = () => {
    const newData = { ...data };
    newData.students.push({
      registraionNo: "",
      departmentId: "",
    });
    setData(newData);
  };

  const deleteID = (index) => {
    const newData = { ...data };
    newData.students.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="CourseWrap">
      <div className="CourseEnterContainer">
        <h1 className="AccountHeader">Add students</h1>
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

        {data.students.map((info, index) => {
          return (
            <div className="InsedCourseInputWrap">
              <div className="InsideCourseContainer" key={index}>
                <div className="AccountInputFields">
                  {index === 0 && (
                    <label className="AccountLabel">Registration ID</label>
                  )}
                  <input
                    type="text"
                    name="registraionNo"
                    onChange={(evnt) => handleID(evnt, index)}
                    value={data.students.registraionNo}
                    className="AccountInput"
                    placeholder="ID"
                  />
                </div>
              </div>
              
              {data.students.length !== 1 && (
                <button
                  className="AdminButton"
                  onClick={() => deleteID(index)}
                >
                  Remove
                </button>
              )}

              <div className="InsideAccountContainer">
                {index === data.students.length - 1 && (
                  <button
                    className="AdminButton"
                    onClick={() => addID()}
                  >
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
            StudentMutate({
              students: data.students,
            })
          }
        >
          Submit
        </button>
      </div>
      <div className="ViewCoursesWrap">
        <h1 className="AccountHeader">View Existing Student IDs</h1>
        <div className="ViewCoursesContainer">
          {studentList.map((info, ind) => {
            return (
              <div className="ViewStudentCard">
                <h4 className="ViewTeacherInfo">{info.registraionNo}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AddStudents;
