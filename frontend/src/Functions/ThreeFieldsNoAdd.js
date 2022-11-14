import React, { useEffect, useState } from "react";
import "../Components/SampleDropdown/styles.css";
import DropdownNoTitleTeacher from "./DropdownNoTitleTeacher";

const ThreeFieldsNoAdd = ({ options, propName, handleData }) => {
  // console.log("ThreeFieldsNoAdd", propName);
  const [listOfInstitutes, setListOfInstitutes] = useState(options);
  const [filteredListOfDepartments, setFilteredListOfDepartments] = useState([]);
  const [filteredListOfTeachers, setFilteredListOfTeachers] = useState([]);

  const [selectedTeachers, setSelectedTeachers] = useState([{
    id: '',
    name: '',
    institute: '',
    department: '',
  }])
  const handleInstitute = (property, value) => {
    setFilteredListOfDepartments(value.departments);
  };
  const handleDepartment = (property, value) => {
    setFilteredListOfTeachers(value.teachers);
  };
  const handleTeacher = (property, value) => {
    handleData(propName, value);
  };
  // useEffect(() => {
  //   console.log(filteredListOfDepartments);
  // }, [filteredListOfDepartments]);

  return (
    <div className="Container">
      {selectedTeachers.map((data, index) => {
        const { institute, department, name } = data;
        return (
          <div className="FormRow" key={index}>
            <div className="threeFormRowElement">
              {index === 0 && <label>Institute</label>}
              <DropdownNoTitleTeacher
                options={listOfInstitutes}
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
