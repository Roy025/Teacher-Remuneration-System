import React, { useState } from "react";
import "./AddInstitute.css";
import { useMutation } from "@tanstack/react-query";

const AddInstitute = () => {

    //Adding institute
  const path = "https://localhost:5001/api/Admin/institute";

  const addInstitute = async (info) => {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify({
        name: info.institute,
      }),
      headers: {
        "Content-type": "application/json; charset-UTF-8",
      },
    });
    const newData = { institute: ""};
    setData(newData);
    return response.json();
  };

  //Fetching institute data



  //Handling data
  const [data, setData] = useState({
    institute: "",
  });

  const [insList, setInsList] = ("");

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
    </div>
  );
};

export default AddInstitute;