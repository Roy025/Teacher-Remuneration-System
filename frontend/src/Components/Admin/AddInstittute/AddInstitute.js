import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import "./AddInstitute.css";
import { useMutation, useQuery } from "@tanstack/react-query";

const AddInstitute = () => {
  const [instituteList, setInstituteList] = useState([]);

  const [data, setData] = useState({
    institute: "",
  });
  //Adding institute
  const postpath = "https://localhost:5001/api/Admin/institute";
  const fetchpath = "https://localhost:5001/api/Admin/institute";

  const Fetching = async () => {
    const response = await fetch(fetchpath);
    return response.json();
  };

  const { info } = useQuery("institution-list", Fetching, {
    refetchOnMount: true,
  })
  setInstituteList(info)


  const addInstitute = async (info) => {
    const response = await fetch(postpath, {
      method: "POST",
      body: JSON.stringify({
        name: info.institute,
      }),
      headers: {
        "Content-type": "application/json; charset-UTF-8",
      },
    });
    const newData = { institute: "" };
    setData(newData);
    return response.json();
  };

  //Fetching institute data

  //Handling data

  const [insList, setInsList] = "";

  const handleInstitute = (e) => {
    const { name, value } = e.target;
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
    console.log(newData);
  };

  const { mutate, isLoading, isError } = useMutation(addInstitute, {
    onSuccess: (success) => {
      console.log(success);
    },
  });
  if (isLoading) {
    console.log("loading");
  }
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
        {instituteList.map((data, index) => {
          return <div className="InstituteItem">{data.name}</div>;
        })}
      </div>
    </div>
  );
};

export default AddInstitute;
