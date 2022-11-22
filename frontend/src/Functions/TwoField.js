import "../Components/SampleDropdown/styles.css";
import React, { useEffect, useState } from "react";
import DropdownNoTitleTeacher from "./DropdownNoTitleTeacher";

const TwoField = ({
  courses,
  teachers,
  handleData,
  existingData = [],
  setExistingData,
}) => {
  const [selectedResponsibilities, setSelectedResponsibilities] = useState([
    {},
  ]);

  const [selectedCourses, setSelectedCourses] = useState(
    existingData
      ? existingData.map((x) => {
          if (x.course && x.course.code) return x.course.code;
          else return "";
        })
      : [""]
  );

  const [selectedTeachers, setSelectedTeachers] = useState(
    existingData
      ? existingData.map((x) => {
          if (x.teacher && x.teacher.name) return x.teacher.name;
          else return "";
        })
      : [""]
  );

  const addInputField = () => {
    setSelectedCourses([...selectedCourses, ""]);
    setSelectedTeachers([...selectedTeachers, ""]);
    setSelectedResponsibilities([...selectedResponsibilities, {}]);
    setExistingData([...existingData, {}]);
  };

  const removeInputFields = (e, index) => {
    e.preventDefault();
    const rows = [...selectedResponsibilities];
    rows.splice(index, 1);
    setSelectedResponsibilities(rows);
    // console.log(rows);

    const courses = [...selectedCourses];
    courses.splice(index, 1);
    setSelectedCourses(courses);

    const teachers = [...selectedTeachers];
    teachers.splice(index, 1);
    setSelectedTeachers(teachers);

    const existing = [...existingData];
    existing.splice(index, 1);
    setExistingData(existing);
  };

  const handleChange = (property, value, index) => {
    const tmp = [...existingData];
    tmp[index] = { ...tmp[index], [property]: value };
    setExistingData(tmp);
  };

  useEffect(() => {
    setSelectedResponsibilities(existingData);
  }, [existingData]);

  return (
    <div className="Container">
      {existingData.map((data, index) => {
        return (
          <div className="ParentFormRow">
            <div
              className={
                existingData.length === 1 ? "FormRow" : "FormRow CrossFormRow"
              }
              key={index}
            >
              <div className="TwoFormRowElementWithAdd">
                {index === 0 ? <label>Teacher's Name</label> : ""}
                <DropdownNoTitleTeacher
                  options={teachers}
                  handleData={handleChange}
                  propName="teacher"
                  index={index}
                  selected={selectedTeachers}
                  setSelected={setSelectedTeachers}
                />
              </div>

              <div className="TwoFormRowElementWithAdd">
                {index === 0 ? <label>Course ID</label> : ""}
                <DropdownNoTitleTeacher
                  options={courses}
                  handleData={handleChange}
                  propName="course"
                  index={index}
                  selected={selectedCourses}
                  setSelected={setSelectedCourses}
                />
              </div>
              {existingData.length !== 1 ? (
                <div className="FormRowElement">
                  <button
                    className={`crossButton ${
                      index === 0 && "twofieldCrossButton-first"
                    }`}
                    onClick={(e) => removeInputFields(e, index)}
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
  );
};
export default TwoField;
