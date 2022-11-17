import React, { useEffect, useState } from "react";
import "../Components/SampleDropdown/styles.css";
import DropdownNoTitleTeacher from "./DropdownNoTitleTeacher";

const ThreeFields = ({ options, propName, handleData, existingData = [], setExistingData }) => {
  const [filteredListOfDepartments, setFilteredListOfDepartments] = useState([[{}]]);
  const [filteredListOfTeachers, setFilteredListOfTeachers] = useState([[{}]]);
  const [selectedTeachers, setSelectedTeachers] = useState(existingData ? existingData : [{
    id: '',
    name: '',
  }])

  const [selectedInstitute, setSelectedInstitute] = useState(existingData ? existingData.map(x => x.institute) : ['']);
  const [selectedDepartment, setSelectedDepartment] = useState(existingData ? existingData.map(x => x.department) : ['']);
  const [selectedMembers, setSelectedMembers] = useState(existingData ? existingData.map(x => x.name) : ['']);


  const handleInstitute = (property, value, index) => {
    const departments = [...filteredListOfDepartments];
    departments[index] = value.departments;
    setFilteredListOfDepartments(departments);
  };

  const handleDepartment = (property, value, index) => {
    const teachers = [...filteredListOfTeachers];
    teachers[index] = value.teachers;
    setFilteredListOfTeachers(teachers);
  };

  const handleTeacher = (property, value, index) => {
    const newSelectedTeachers = [...selectedTeachers];
    newSelectedTeachers[index] = value;
    setSelectedTeachers(newSelectedTeachers);
  };

  useEffect(() => {
    setExistingData(selectedTeachers);
  }, [selectedTeachers]);

  const addInputField = () => {
    const departments = [...filteredListOfDepartments];
    departments.push([{}]);
    setFilteredListOfDepartments(departments);

    const teachers = [...filteredListOfTeachers];
    teachers.push([{}]);
    setFilteredListOfTeachers(teachers);

    setSelectedTeachers([
      ...selectedTeachers,
      {},
    ]);

    setSelectedMembers([
      ...selectedMembers,
      '',
    ]);
  };

  const removeInputFields = (e, index) => {
    e.preventDefault();
    const teachers = [...selectedTeachers];
    teachers.splice(index, 1);
    setSelectedTeachers(teachers);

    const departments = [...filteredListOfDepartments];
    departments.splice(index, 1);
    setFilteredListOfDepartments(departments);

    const teachersList = [...filteredListOfTeachers];
    teachersList.splice(index, 1);
    setFilteredListOfTeachers(teachersList);

    const members = [...selectedMembers];
    members.splice(index, 1);
    setSelectedMembers(members);

  };

  return (
    <div className="Container">
      {selectedTeachers.map((data, index) => {

        return (
          <div className="ParentFormRow">
            <div
              className={`FormRow ${selectedTeachers.length !== 1 && "CrossFormRow"}`}
              key={index}
            >
              <div className="threeFormRowElement">
                {index === 0 && <label>Institute</label>}
                <DropdownNoTitleTeacher
                  options={options}
                  propName="institute"
                  handleData={handleInstitute}
                  index={index}
                  selected={selectedInstitute}
                  setSelected={setSelectedInstitute}

                />
              </div>
              <div className="threeFormRowElement">
                {index === 0 && <label>Department</label>}
                <DropdownNoTitleTeacher
                  options={filteredListOfDepartments[index]}
                  propName="department"
                  handleData={handleDepartment}
                  index={index}
                  selected={selectedDepartment}
                  setSelected={setSelectedDepartment}
                />
              </div>
              <div className="threeFormRowElement">
                {index === 0 && <label>Teacher</label>}
                <DropdownNoTitleTeacher
                  options={filteredListOfTeachers[index]}
                  propName="teacher"
                  handleData={handleTeacher}
                  index={index}
                  selected={selectedMembers}
                  setSelected={setSelectedMembers}
                />
              </div>
              {selectedTeachers.length !== 1 && (
                <div className="FormRowElement">
                  <button
                    className={`crossButton ${index === 0 && "crossButton-first"}`}
                    onClick={(evnt) => removeInputFields(evnt, index)}
                  >x</button>
                </div>
              )}
            </div>
            {selectedTeachers.length - 1 === index && (
              <div className="FormRowElement">
                <button
                  className="addButton"
                  onClick={() => addInputField()}
                  type="button"
                >
                  <i className="fa-sharp fa-solid fa-plus "></i>
                </button>
              </div>
            )}
          </div>

        )
      })}
    </div>
  )
}

export default ThreeFields;
