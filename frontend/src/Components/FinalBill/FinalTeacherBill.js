import React from "react";
import BillTable from "./BillTable";
import "./FinalTeacherBill.css";

function FinalTeacherBill() {
  const session = "2018-19";
  const semester = "2nd";
  const department = "Software Engineering";
  const teachername = "Ahsan Habib";
  const teachertitle = "Assistant professor";
  const teacheraddress = "Surma";

  return (
    <div className="FullTablePage">
      <div className="BillTitle">Teacher Remuneration Bill</div>
      <div className="deptTitle"><b>Department:</b>{` ${department}`}</div>
      <div className="smallTitle">
        <p>
          <b>Session:</b>{` ${session}`}  <b>Semester:</b>{` ${semester}`}
        </p>
      </div>
      <div className="TeacherInfo">
        <ol>
          <li><b>Teacher's name:</b> {` ${teachername}`}</li>
          <li><b>Teacher's title:</b> {` ${teachertitle}`}</li>
          <li><b>Teacher's address:</b> {` ${teacheraddress}`}</li>
        </ol>
      </div>
      <div>
        <BillTable />
      </div>
    </div>
  );
}

export default FinalTeacherBill;
