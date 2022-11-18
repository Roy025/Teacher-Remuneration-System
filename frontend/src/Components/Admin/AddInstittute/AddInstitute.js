import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import "./AddInstitute.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import { instance as axios } from "../../axios";

const AddInstitute = () => {
  const [instituteList, setInstituteList] = useState([]);

  const [data, setData] = useState({
    institute: "",
  });

  //Fetching institute data
  const fetchInstitute = async () => {
    const response = await axios.get("/institute");
    return response;
  };

  useQuery(["institution-list"], async () => {
    const store = await fetchInstitute();
    console.log(store);
    setInstituteList(store.data.data);
    return store;
  });

  //Adding institute

  const addInstitute = async (info) => {
    const response = await axios.post("/Admin/institute", {
      name: info.institute,
    });
    const newData = { institute: "" };
    setData(newData);
    console.log(response);
    return response;
  };

  //Handling data

  const [insList, setInsList] = "";

  const handleInstitute = (e) => {
    const { name, value } = e.target;
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
    console.log(newData);
  };

  const { mutate, isError } = useMutation(addInstitute, {
    onSuccess: (success) => {
      console.log(success);
      window.location.reload(false);
    },
  });
  if (isError) {
    console.log("Something went wrong ");
  }

  return (
    <div className="AddInsWrap">
      <div className="AddInsContainer">
        <h1 className="AddInsHeader">Add Institute</h1>
        <div className="AddInsInputFields">
          <label className="AddInsLabel">Institute</label>
          <input
            type="text"
            name="institute"
            onChange={(evnt) => handleInstitute(evnt)}
            value={data.institute}
            className="AddInsInput"
            placeholder="Institute"
          />
        </div>
        <button
          className="AdminButton AdminSubmit"
          onClick={() => mutate({ institute: data.institute })}
        >
          Submit
        </button>
      </div>

      <div className="InstituteList">
        <h1 className="AddInsHeader">Existing Institutes</h1>
        {instituteList.map((data, index) => {
          return <div className="InstituteItem">{data.name}</div>;
        })}
      </div>
    </div>
  );
};

export default AddInstitute;
