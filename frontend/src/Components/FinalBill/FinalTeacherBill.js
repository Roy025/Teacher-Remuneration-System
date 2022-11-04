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
      <div className="deptTitle">{`Department: ${department}`}</div>
      <div className="smallTitle">
        <p>
          {`Session:
 ${session}  Semester:
 ${semester}`}
        </p>
      </div>
      <div className="TeacherInfo">
        <ol>
          <li>{`Teacher's name: ${teachername}`}</li>
          <li>{`Teacher's title: ${teachertitle}`}</li>
          <li>{`Teacher's address: ${teacheraddress}`}</li>
        </ol>
      </div>
      <div>
        <BillTable />
      </div>
    </div>
  );
}

export default FinalTeacherBill;
