import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { instance as axios } from "../../axios";
import "./CreateDept.css";
import DropdownNoTitleTeacher from "../../../Functions/DropdownNoTitleTeacher";

const CreateDept = () => {
  // Store incoming data
  const [instituteList, setInstituteList] = useState([]);
  const [selectedInstitute, setSelectedInstitute] = useState([""]);
  const [insTituteAvailable, setInsTituteAvailable] = useState(false);

  const [deptList, setDeptList] = useState([]);

  const [data, setData] = useState({
    id: "",
    institute: "",
    dept: "",
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

  //Adding department

  const addDept = async (info) => {
    const response = await axios.post("/Admin/department", {
      name: info.dept,
      instituteId: info.id,
    });
    return response;
  };
  const { mutate, isError, error } = useMutation(addDept, {
    onSuccess: (success) => {
      console.log(success);
      window.location.reload(false);
    },
  });
  if (isError) {
    console.log(error);
  }

  //Fetching department data

  const fetchDept = async (id) => {
    const response = await axios.get(`/department?institute=${id}`);
    console.log(response)
    setDeptList(response.data.data)
    return response;
  };

  useQuery(["dept-list", data.id], () => fetchDept(data.id), {
    enabled: !!insTituteAvailable,
  });

  //Handling data

  const handleInstitute = (propName, option) => {
    const newData = { ...data };
    newData.propName = option.name;
    newData.id = option.id;
    setInsTituteAvailable(true);
    setData(newData);
  };

  const handleDept = (evnt) => {
    const { name, value } = evnt.target;
    const newData = { ...data };
    newData.dept = value;
    setData(newData);
  };

  return (
    <div className="CreateDeptWrap">
      <div className="CreateDeptContainer">
        <h1 className="CreateDeptHeader">Add Department</h1>
        <div className="AddInputFields">
          <label className="AddLabel">Institute</label>
          <DropdownNoTitleTeacher
            options={instituteList}
            propName="institute"
            handleData={handleInstitute}
            selected={selectedInstitute}
            setSelected={setSelectedInstitute}
          />
        </div>
        <div className="AddInputFields">
          <label className="AddLabel">Department</label>
          <input
            type="text"
            name="dept"
            onChange={(evnt) => handleDept(evnt)}
            value={data.dept}
            className="AddInput"
            placeholder="Department"
          />
        </div>
        <button
          className="AdminButton AdminSubmit"
          onClick={() => mutate({ dept: data.dept, id: data.id })}
        >
          Submit
        </button>
      </div>

      <div className="InstituteList">
        <h2 className="AddHeader">Existing Department</h2>
        {deptList.map((data, index) => {
          return <div className="InstituteItem">{data.name}</div>;
        })}
      </div>
    </div>
  );
};

export default CreateDept;