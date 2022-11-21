import React, { useState } from "react";
import DropdownNoTitleTeacher from "../../../Functions/DropdownNoTitleTeacher";
import { useQuery } from "@tanstack/react-query";
import { instance as axios } from "../../axios";
import "./ViewAccount.css";

function ViewAccount() {
  const [instituteList, setInstituteList] = useState([]);
  const [deptList, setDeptList] = useState([]);
  const [teacherList, setTeacherList] = useState([]);
  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [selectedDept, setSelectedDept] = useState("");
  const [insTituteAvailable, setInsTituteAvailable] = useState(false);
  const [deptAvailable, setDeptAvailable] = useState(false);

  const [data, setData] = useState({
    id: "",
    institute: "",
    department: "",
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

  //Fetching teacher data

  const fetchTeacher = async (id) => {
    const response = await axios.get(`/teacher?department=${id}`);
    console.log(response.data.data);
    setTeacherList(response.data.data);
    return response;
  };

  useQuery(["teacher-list", data.id], () => fetchTeacher(data.id), {
    enabled: !!deptAvailable,
  });

  // Handle institute data

  const handleInstitute = (propName, option) => {
    const newData = { ...data };
    newData.institute = option;
    newData.id = option.id;
    setInsTituteAvailable(true);
    setData(newData);
  };

  // Handle department data

  const handleDepartment = (propName, option) => {
    const newData = { ...data };
    newData.department = option;
    newData.id = option.id;
    setDeptAvailable(true);
    setData(newData);
  };

  return (
    <div className="ViewAccountWrap">
      <div className="ViewAccountSelection">
        <h1 className="ViewHeader">View accounts</h1>
        <div className="ViewSelectionElements">
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
      </div>

      <div className="ViewTeacherWrap">
        {teacherList.map((info, index) => {
          return (
            <div className="ViewTeacherCard">
              <h3 className="ViewTeacherName">{info.name}</h3>
              <h4 className="ViewTeacherInfo">{info.email}</h4>
              <h4 className="ViewTeacherInfo">{info.department.name}</h4>
              <h4 className="ViewTeacherInfo">
                {info.department.institute.name}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewAccount;
