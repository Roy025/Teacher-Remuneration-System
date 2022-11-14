import React, { useState } from "react";
import { Button } from "../../Buttons/Button";
import SimpleButton from "../../Buttons/SimpleButton";
import "./CreateAccount.css";

const CreateAccount = () => {
  const [data, setData] = useState({
    institute: "",
    department: "",
    members: [
      {
        id: "",
        password: "",
      },
    ],
  });

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
          <input
            type="text"
            name="institute"
            onChange={(evnt) => handleInstitute(evnt)}
            value={data.institute}
            className="AccountInput"
            placeholder="Institute"
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
                    <label className="AccountLabel">Teacher ID</label>
                  )}
                  <input
                    type="text"
                    name="id"
                    onChange={(evnt) => handlememberid(evnt, index)}
                    value={info.id}
                    className="AccountInput"
                    placeholder="userID"
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

              <div className="InsideAccountContainer">
                {index === data.members.length-1 && (
                  <button
                    className="AccountButton"
                    onClick={() => addMembers()}
                  >
                    Add
                  </button>
                )}
                {data.members.length !== 1 && (
                  <button
                    className="AccountButton"
                    onClick={() => deleteMembers(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreateAccount;
