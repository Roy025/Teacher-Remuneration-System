import React, { useState } from "react";
import DropdownNoTitleTeacher from "../../../Functions/DropdownNoTitleTeacher";
import { useQuery, useMutation } from "@tanstack/react-query";
import { instance as axios } from "../../axios";

function UpdateRole() {
  const [instituteList, setInstituteList] = useState([]);
  const [deptList, setDeptList] = useState([]);
  const [teacherList, setTeacherList] = useState([]);
  const [roleList, setRoleList] = useState([
    {
      name: "Director",
    },
    {
      name: "Teacher",
    },
  ]);
  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [insTituteAvailable, setInsTituteAvailable] = useState(false);
  const [deptAvailable, setDeptAvailable] = useState(false);

  const [data, setData] = useState({
    id: "",
    institute: "",
    department: "",
    teacher: "",
    role: "",
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
    newData.institute = option.name;
    newData.id = option.id;
    setInsTituteAvailable(true);
    setData(newData);
  };

  // Handle department data

  const handleDepartment = (propName, option) => {
    const newData = { ...data };
    newData.department = option.name;
    newData.id = option.id;
    setDeptAvailable(true);
    setData(newData);
  };

  // Handle teacher data

  const handleTeacher = (propName, option) => {
    const newData = { ...data };
    newData.teacher = option.name;
    newData.id = option.id;
    setData(newData);
  };

  // Handle teacher data

  const handleRole = (propName, option) => {
    const newData = { ...data };
    newData.role = option.name;
    setData(newData);
  };

  // Update role

  const updateRole = async (info) => {
    console.log(info.teachers);
    const response = await axios.patch(`/Admin/teacher/${data.id}`, {
      role: info.role,
    });
    return response;
  };

  const {
    mutate: RoleMutate,
    isError,
    error,
  } = useMutation(updateRole, {
    onSuccess: (success) => {
      console.log(success);
      window.location.reload(false);
    },
  });
  if (isError) {
    console.log(error);
  }

  return (
    <div className="ViewAccountWrap">
      <div className="ViewAccountSelection">
        <h1 className="ViewHeader">Assign Director Role</h1>
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
          <div className="AccountInputFields">
            <label className="AccountLabel">Teacher</label>
            <DropdownNoTitleTeacher
              options={teacherList}
              propName="teacher"
              handleData={handleTeacher}
              selected={selectedTeacher}
              setSelected={setSelectedTeacher}
            />
          </div>
        </div>

        <div className="AccountInputFields">
          <label className="AccountLabel">Department</label>
          <DropdownNoTitleTeacher
            options={roleList}
            propName="role"
            handleData={handleRole}
            selected={selectedRole}
            setSelected={setSelectedRole}
          />
        </div>

        <button
          className="AdminButton AdminSubmit"
          onClick={() =>
            RoleMutate({
              role: data.role,
            })
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default UpdateRole;
