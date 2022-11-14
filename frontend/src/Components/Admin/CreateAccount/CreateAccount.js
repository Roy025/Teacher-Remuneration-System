import React, { useState } from "react";
import Dropdown, {
  semesterOptions,
  semesterTitle,
  sessionTitle,
  sessionOptions,
} from "../../SampleDropdown/Dropdown";

import "./CreateAccount.css";
function CreateAccount() {
  const [data, setData] = useState({
    institute: "",
    department: "",
    id: "",
    password: "",
  });

  const handleMainData = (property, value) => {
    const newData = { ...data };
    newData[property] = value;
    setData(newData);
  };
  return (
    <div className="AccountContainer">
      
    </div>
  );
}

export default CreateAccount;
