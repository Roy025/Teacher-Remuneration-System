import React, { useState } from "react";
import "../Components/SampleDropdown/styles.css";
import DropdownNoTitleTeacher from "./DropdownNoTitleTeacher";

const ThreeFieldsNoAdd = ({ options, propName, handleData, existingData = '', setExistingData }) => {
  const [filteredListOfDepartments, setFilteredListOfDepartments] = useState([]);
  const [filteredListOfTeachers, setFilteredListOfTeachers] = useState([]);
  const [selectedInstitute, setSelectedInstitute] = useState(existingData.institute ? existingData.institute : '');
  const [selectedDepartment, setSelectedDepartment] = useState(existingData.department ? existingData.department : '');
  const [selectedName, setSelectedName] = useState(existingData.name ? existingData.name : '');

  const handleInstitute = (property, value) => {
    console.log(value);
    setFilteredListOfDepartments(value.departments);
  };

  const handleDepartment = (property, value) => {
    setFilteredListOfTeachers(value.teachers);
  };

  const handleTeacher = (property, value) => {
    setExistingData(value);
  };

  return (
    <div className="Container">
      <div className="FormRow">
        <div className="threeFormRowElement">
          <label>Institute</label>
          <DropdownNoTitleTeacher
            options={options}
            propName="institute"
            handleData={handleInstitute}
            selected={selectedInstitute}
            setSelected={setSelectedInstitute}

          />
        </div>

        <div className="threeFormRowElement">
          <label>Department</label>
          <DropdownNoTitleTeacher
            options={filteredListOfDepartments}
            propName="department"
            handleData={handleDepartment}
            selected={selectedDepartment}
            setSelected={setSelectedDepartment}
          />
        </div>

        <div className="threeFormRowElement">
          <label>Teacher</label>
          <DropdownNoTitleTeacher
            options={filteredListOfTeachers}
            propName="teacher"
            handleData={handleTeacher}
            selected={selectedName}
            setSelected={setSelectedName}
          />
        </div>
      </div>
    </div>
  )
};

export default ThreeFieldsNoAdd;
