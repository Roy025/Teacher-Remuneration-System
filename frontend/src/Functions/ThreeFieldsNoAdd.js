import React, { useState } from "react";
import "../Components/SampleDropdown/styles.css";
import DropdownNoTitleTeacher from "./DropdownNoTitleTeacher";

const ThreeFieldsNoAdd = ({ options, propName, handleData }) => {
  const [filteredListOfDepartments, setFilteredListOfDepartments] = useState([]);
  const [filteredListOfTeachers, setFilteredListOfTeachers] = useState([]);
  const [selectedTeachers] = useState([{
    id: '',
    name: '',
    institute: '',
    department: '',
  }]);

  const handleInstitute = (property, value) => {
    setFilteredListOfDepartments(value.departments);
  };

  const handleDepartment = (property, value) => {
    setFilteredListOfTeachers(value.teachers);
  };

  const handleTeacher = (property, value) => {
    handleData(propName, value);
  };

  return (
    <div className="Container">
      {selectedTeachers.map((data, index) => {
        return (
          <div className="FormRow" key={index}>
            <div className="threeFormRowElement">
              {index === 0 && <label>Institute</label>}
              <DropdownNoTitleTeacher
                options={options}
                propName="institute"
                handleData={handleInstitute}
              />
            </div>
            <div className="threeFormRowElement">
              {index === 0 && <label>Department</label>}
              <DropdownNoTitleTeacher
                options={filteredListOfDepartments}
                propName="department"
                handleData={handleDepartment}
              />
            </div>
            <div className="threeFormRowElement">
              {index === 0 && <label>Teacher</label>}
              <DropdownNoTitleTeacher
                options={filteredListOfTeachers}
                propName="teacher"
                handleData={handleTeacher}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default ThreeFieldsNoAdd;
