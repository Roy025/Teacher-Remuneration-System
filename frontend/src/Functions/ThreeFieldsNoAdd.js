import React, { useEffect, useState } from "react";
import "../Components/SampleDropdown/styles.css";
import DropdownNoTitleTeacher from "./DropdownNoTitleTeacher";
import { instance as axios } from "../Components/axios";

const ThreeFieldsNoAdd = ({ options, propName, handleData, existingData='', setExistingData }) => {
  const [filteredListOfDepartments, setFilteredListOfDepartments] = useState([]);
  const [filteredListOfTeachers, setFilteredListOfTeachers] = useState([]);
  const [selectedInstitute, setSelectedInstitute] = useState(existingData.institute ? existingData.institute : '');
  const [selectedDepartment, setSelectedDepartment] = useState(existingData.department ? existingData.department : '');
  const [selectedName, setSelectedName] = useState(existingData.name ? existingData.name : '');

  useEffect(() => {
    setSelectedInstitute(existingData.department ? existingData.department.institute.name : '');

    setSelectedDepartment(existingData.department ? existingData.department.name : '');

    setSelectedName(existingData.name ? existingData.name : '');
  }, [existingData]);


  const handleInstitute = async (property, value) => {
    try {
      const res = await axios.get(`/department?institute=${value.id}`);
      setFilteredListOfDepartments(res.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDepartment = async (property, value) => {
    try {
      const res = await axios.get(`/teacher?department=${value.id}`);
      setFilteredListOfTeachers(res.data.data);

    } catch (err) {
      console.log(err.message);
    }
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
