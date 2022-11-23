import React, { useState } from "react";
import Links from "./Links";
import "./TeachersBill.css";
import "./FormButton.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import { instance as axios } from "../axios";
import DropdownNoTitleTeacher from "../../Functions/DropdownNoTitleTeacher";

const ChiefInvigilatorBill = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedInvigilator, setSelectedInvigilator] = useState("");
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

  const [courseOptions, setCourseOptions] = useState([]);

  const [invigilatorList, setInvigilatorList] = useState([]);

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

  //Fetching teacher data

  const fetchTeachers = async (id) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("accesstoken"),
      },
    };
    const response = await axios.get(`/department?institute=${id}`);
    console.log(response);
    setInvigilatorList(response.data.data);
    return response;
  };
  useQuery(["teacher-list", data.id], () => fetchTeachers(data.id), {
    enabled: !!sessionAvailable && !!semesterAvailable,
  });

  //Fetching course data

  const fetchCourse = async (id) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("accesstoken"),
      },
    };
    const response = await axios.get(
      `/Exam/chairman/course?Semester=${selectedSession}&Session=${selectedSemester}`,
      config
    );
    console.log(response);
    setCourseOptions(response.data.data);
    return response;
  };
  useQuery(["course-list", data.id], () => fetchCourse(data.id), {
    enabled: !!sessionAvailable && !!semesterAvailable,
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

  //handle invigilator
  const handleInvigilator = (propName, option, currentIndex) => {
    const newData = { ...data };
    newData[currentIndex].teacherID = option.id;
    setData(newData);
    console.log(data);
  };

  const deleteInvigilator = (index) => {
    const newData = { ...data };
    newData.splice(index, 1);
    setData(newData);
  };

  const addInvigilator = () => {
    const newData = { ...data };
    newData.push({
      courseID: "",
      teacherID: "",
    });
  };

  // Have to update ID
  const handleCourse = (propName, option) => {
    const newData = { ...data };
    newData.courseID = option.id;
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
            {data.map((info, index) => {
              return (
                <div className="InsedCourseInputWrap">
                  <div className="InsideCourseContainer" key={index}>
                    <div className="AccountInputFields">
                      {index === 0 && (
                        <label className="AccountLabel">Invigilators</label>
                      )}
                      <DropdownNoTitleTeacher
                        options={invigilatorList}
                        propName="invigilator"
                        handleData={handleInvigilator}
                        selected={selectedInvigilator}
                        setSelected={setSelectedInvigilator}
                        index={index}
                      />
                    </div>
                  </div>

                  {data.length !== 1 && (
                    <button
                      className="AdminButton"
                      onClick={() => deleteInvigilator(index)}
                    >
                      Remove
                    </button>
                  )}
                  <div className="InsideAccountContainer">
                    {index === data.length - 1 && (
                      <button
                        className="AdminButton"
                        onClick={() => addInvigilator()}
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
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
