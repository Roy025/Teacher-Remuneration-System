import React, { useState } from "react";
import DropdownNoTitleTeacher from "../../../Functions/DropdownNoTitleTeacher";
import { useMutation, useQuery } from "@tanstack/react-query";
import { instance as axios } from "../../axios";
import "./CreateAccount.css";

const CreateAccount = () => {
  // Store things
  const [instituteList, setInstituteList] = useState([]);
  const [selectedInstitute, setSelectedInstitute] = useState([""]);
  const [deptList, setDeptList] = useState([]);
  const [insData, setInsData] = useState({
    id: "",
    institute: "",
    dept: "",
  });
  const [data, setData] = useState({
    institute: "",
    department: "",
    members: [
      {
        email: "",
        password: "",
      },
    ],
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

  // Handle data

  const handleMainData = (property, value) => {
    const newData = { ...data };
    newData[property] = value;
    setData(newData);
  };

  const handleInstitute = (e) => {
    const { name, value } = e.target;
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
    console.log(newData);
  };

  const handlememberid = (e, index) => {
    const { name, value } = e.target;
    const newData = { ...data };
    newData.members[index].id = value;
    console.log(newData.members[index]);
    setData(newData);
    console.log(newData);
  };

  const handlememberpass = (e, index) => {
    const { name, value } = e.target;
    const newData = { ...data };
    newData.members[index].password = value;
    console.log(newData.members[index]);
    setData(newData);
    console.log(newData);
  };

  const addMembers = () => {
    const newData = { ...data };
    newData.members.push({
      id: "",
      password: "",
    });
    setData(newData);
  };

  const deleteMembers = (index) => {
    const newData = { ...data };
    newData.members.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="AccountWrap">
      <div className="AccountContainer">
        <h1 className="AccountHeader">Create Accounts</h1>
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
          <input
            type="text"
            name="department"
            onChange={(evnt) => handleInstitute(evnt)}
            value={data.department}
            className="AccountInput"
            placeholder="department"
          />
        </div>

        {data.members.map((info, index) => {
          return (
            <div className="InsedAccountWrap">
              <div className="InsideAccountContainer" key={index}>
                <div className="AccountInputFields" key={index}>
                  {index === 0 && (
                    <label className="AccountLabel">Teacher Email</label>
                  )}
                  <input
                    type="text"
                    name="email"
                    onChange={(evnt) => handlememberid(evnt, index)}
                    value={info.id}
                    className="AccountInput"
                    placeholder="Email"
                  />
                </div>
                <div className="AccountInputFields  " key={index}>
                  {index === 0 && (
                    <label className="AccountLabel">Password</label>
                  )}
                  <input
                    type="text"
                    name="password"
                    onChange={(evnt) => handlememberpass(evnt, index)}
                    value={info.password}
                    className="AccountInput"
                    placeholder="password"
                  />
                </div>
              </div>

              {data.members.length !== 1 && (
                <button
                  className="AdminButton"
                  onClick={() => deleteMembers(index)}
                >
                  Remove
                </button>
              )}
              <div className="InsideAccountContainer">
                {index === data.members.length - 1 && (
                  <button className="AdminButton" onClick={() => addMembers()}>
                    Add
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <button className="AdminButton AdminSubmit">Submit</button>
      </div>
    </div>
  );
};

export default CreateAccount;
