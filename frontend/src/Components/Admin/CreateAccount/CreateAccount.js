import React, {useState} from "react";
import Dropdown, {
  semesterOptions,
  semesterTitle,
  sessionTitle,
  sessionOptions,
} from "../../SampleDropdown/Dropdown";

import "./CreateAccount.css";
function CreateAccount() {

    const [data, setData] = useState({
        session: "",
        semester: "",
        id: "",
        password: ""
      })

    const handleMainData = (property, value) => {
        const newData = { ...data };
        newData[property] = value;
        setData(newData);
      };
  return (
    <div className="AccountContainer">
      <div className="FormSubRow">
        <Dropdown
          options={sessionOptions}
          dropdownTitle={sessionTitle}
          handleData={handleMainData}
        />
      </div>

      <div className="FormSubRow">
        <Dropdown
          options={semesterOptions}
          dropdownTitle={semesterTitle}
          handleData={handleMainData}
        />
      </div>
    </div>
  );
}

export default CreateAccount;
