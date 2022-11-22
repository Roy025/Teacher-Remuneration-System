import React, { useEffect, useState } from "react";
import "./checkbox.css";
import DropdownNoTitleTeacher from "./DropdownNoTitleTeacher";
import SingleDatawithadd from "./SingleDatawithadd";

const TermPaperComp = ({ options, propName, handleData, existingData, setExistingData }) => {

  const [selectedCourses, setSelectedCourses] = useState([existingData ? existingData.map(data => data.course.title) : ""]);
  const [teacherList, setTeacherList] = useState([{
    id: "",
    name: ""
  }]);
  const [selectedSupervisors, setSelectedSupervisors] = useState(existingData ? existingData.map(data => data.supervisors) : [[]]);
  const [selectedExaminers, setSelectedExaminers] = useState(existingData ? existingData.map(data => data.examiners) : [[]]);


  const handleCourses = (propName, option, index) => {
    const newData = [...existingData];
    newData[index].course = option;
    setExistingData(newData);
  }

  useEffect(() => {
    const newData = [...existingData];
    newData.forEach((el, idx) => {
      el.supervisors = selectedSupervisors[idx];
      el.examiners = selectedExaminers[idx];
    });
    setExistingData(newData);
    console.log(newData);
  }, [selectedSupervisors, selectedExaminers])

  const addInputFieldCourse = () => {
    const newData = [...existingData];
    newData.push({
      course: {
        id: "",
        code: ""
      },
      supervisors: [{
        id: "",
        name: "",
      }],
      examiners: [{
        id: "",
        name: "",
      }],
    })
    setExistingData(newData);

    setSelectedCourses([...selectedCourses, ""]);

    setSelectedSupervisors([...selectedSupervisors, [{
      id: "",
      name: "",
    }]]);
    setSelectedExaminers([...selectedExaminers, [{
      id: "",
      name: "",
    }]]);

  }
  const setCommitteeStatus = (e, index) => {
    const newData = [...existingData]; 
    newData[index].isIncludedInExamCommittee = e.target.checked;
    setExistingData(newData);
  };

  const removeInputFieldsCourse = (evnt, index) => {
    const newData = [...existingData];
    newData.splice(index, 1);
    setExistingData(newData);

    const newSelectedCourses = [...selectedCourses];
    newSelectedCourses.splice(index, 1);
    setSelectedCourses(newSelectedCourses);

    const newSelectedSupervisors = [...selectedSupervisors];
    newSelectedSupervisors.splice(index, 1);
    setSelectedSupervisors(newSelectedSupervisors);

    const newSelectedExaminers = [...selectedExaminers];
    newSelectedExaminers.splice(index, 1);
    setSelectedExaminers(newSelectedExaminers);
  }




  return (
    <div className="Container">
      {existingData.map((data, index) => {
        return (
          <div className="ParentFormRow" key={index}>
            <div
              className={
                existingData.length === 1 ? "FormRow" : "FormRow CrossFormRow"
              }
              key={index}
            >
              <div className="FormRowNoCross">
                <div className="labelFlex TermpaperCompElement TermPaperCourse">
                  <label>Course</label>
                  <DropdownNoTitleTeacher
                    options={options}
                    propName="course"
                    selected={selectedCourses}
                    setSelected={setSelectedCourses}
                    handleData={handleCourses}
                    index={index}
                  />
                </div>

                <SingleDatawithadd
                  options={teacherList}
                  propName="Supervisors"
                  index={index}
                  existingData={selectedSupervisors}
                  setExistingData={setSelectedSupervisors}
                />

                <SingleDatawithadd
                  options={teacherList}
                  propName="Examiners"
                  index={index}
                  existingData={selectedExaminers}
                  setExistingData={setSelectedExaminers}
                />

                <div className="FormRowNoCross">
                  <label class="Form-control">
                    <input
                      type="checkbox"
                      name="checkbox"
                      checked={data.isIncludedInExamCommittee}
                      onChange={(evnt) => setCommitteeStatus(evnt, index)}
                    />
                    Exam committee
                  </label>
                </div>
              </div>

              {existingData.length !== 1 ? (
                <div className="FormRowElement">
                  <button
                    className={
                      index === 0
                        ? "crossButton crossButton-first"
                        : "crossButton"
                    }
                    onClick={(evnt) => removeInputFieldsCourse(evnt, index)}
                  >
                    x
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>

            {existingData.length - 1 === index && (
              <div className="FormRowElement">
                <button
                  className="addButton"
                  onClick={() => addInputFieldCourse()}
                  type="button"
                >
                  <i className="fa-sharp fa-solid fa-plus"></i>
                </button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  );
}

export default TermPaperComp;
