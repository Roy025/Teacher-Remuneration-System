import "./styles.css";
import Dropdown from "./Dropdown";
// import { useState } from "react";

function App() {
  const sessionTitle = "Session";
  const sessionOptions = [
    "2016-17",
    "2017-18",
    "2018-19",
    "2019-20",
    "2020-21",
  ];
  const semesterTitle = "Semester";
  const semesterOptions = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
  ];
  // const [selected, setSelected] = useState("Select");

  return (
    <div className="App">
      <div className="session-semester-Dropdown">
        <Dropdown
          // selected={selected}
          // setSelected={setSelected}
          options={sessionOptions}
          dropdownTitle={sessionTitle}
        />
        <Dropdown
          // selected={selected}
          // setSelected={setSelected}
          options={semesterOptions}
          dropdownTitle={semesterTitle}
        />
      </div>
    </div>
  );
}

export default App;
