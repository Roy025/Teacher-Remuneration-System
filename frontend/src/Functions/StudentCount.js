import React, { useEffect, useState } from "react";
import DropdownNoTitleTeacher from "./DropdownNoTitleTeacher";

const StudentCount = ({ options, propName, handeData, existingData, setExistingData }) => {
  const [selectedData, setSelectedData] = useState([{}]);
  const [selectedCourses, setSelectedCourses] = useState(existingData ? existingData.map(x => {
    return (x.course && x.course.code) ? x.course.code : "";
  }) : [""]);

  const [numberOfStudents, setNumberOfStudents] = useState(existingData ? existingData.map(x => {
    return x.numberOfStudents ? x.numberOfStudents : ``;
  }) : [""]);

  const handleChange = (evnt, index) => {
    const tmp = evnt.target.value;
    // console.log(existingData);
    // console.log(tmp);
    const list = [...numberOfStudents];
    list[index] = tmp;
    setNumberOfStudents(list);
    const tmp2 = [...existingData];
    tmp2[index].numberOfStudents = tmp;
    setExistingData(tmp2);
  }
  const removeInputFields = (e, index) => {
    e.preventDefault();
    const courses = [...selectedCourses];
    courses.splice(index, 1);
    setSelectedCourses(courses);
    const students = [...numberOfStudents];
    students.splice(index, 1);
    setNumberOfStudents(students);
    const existing = [...existingData];
    existing.splice(index, 1);
    setExistingData(existing);
  };

  const addInputField = () => {
    setSelectedData([...selectedData, {}]);
    setSelectedCourses([...selectedCourses, ""]);
    setNumberOfStudents([...numberOfStudents, ""]);
    setExistingData([...existingData, {}]);
  };
  useEffect(() => {
    setSelectedData(existingData);
  }, [existingData]);

  return (
    <div className="Container" >
      {selectedData.map((data, index) => {
        return (
          <div className="ParentFormRow">
            <div className={`FormRow ${selectedData.length === 1 ? "" : "CrossFormRow"}`} key={index}>
              <div className="TwoFormRowElementWithAdd">
                {index === 0 ? <label>Course ID</label> : ""}
                <DropdownNoTitleTeacher
                  options={options}
                  propName="course"
                  index={index}
                  selected={selectedCourses}
                  setSelected={setSelectedCourses}
                />
              </div>

              <div className="TwoFormRowElementWithAdd">
                {index === 0 ? <label>Number of Students</label> : ""}
                <input
                  type="number"
                  name="numberOfStudents"
                  onChange={(evnt) => handleChange(evnt, index)}
                  value={numberOfStudents[index]}
                  className="FormControl number"
                  placeholder="Number"
                  onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                />
              </div>

              {selectedData.length !== 1 ? (
                <div className="FormRowElement">
                  <button
                    className={
                      index === 0
                        ? "crossButton crossButton-first"
                        : "crossButton"
                    }
                    onClick={(evnt) => removeInputFields(evnt, index)}
                  >
                    x
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            {selectedData.length - 1 === index && (
              <div className="FormRowElement">
                <button
                  className="addButton"
                  onClick={() => addInputField()}
                  type="button"
                >
                  <i className="fa-sharp fa-solid fa-plus"></i>
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  )
}

export default StudentCount;
