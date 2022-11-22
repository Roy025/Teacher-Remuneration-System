import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Dropdown, {
  semesterOptions,
  semesterTitle,
  sessionTitle,
  sessionOptions,
} from "../SampleDropdown/Dropdown";
import BillTable from "./BillTable";
import "./FinalTeacherBill.css";

const FinalTeacherBill = () => {
  const session = "2018-19";
  const semester = "2nd";
  const teachername = "Ahsan Habib";
  const teachertitle = "Assistant professor";
  const teacherdepartment = "Software Engineering";
  const teacheraddress = "Surma";

  let ref = useRef(null);

  return (
    <div>
      <div className="TablePageHeader">
        <div className="generateBillTitle">Generate Bill</div>
        <div className="selectSessionSemester">
          <div className="selectSessionSemesterChild">
            <Dropdown options={sessionOptions} dropdownTitle={sessionTitle} />
          </div>
          <div className="selectSessionSemesterChild">
            <Dropdown options={semesterOptions} dropdownTitle={semesterTitle} />
          </div>
        </div>
      </div>

      <div className="BillForm">
        <ReactToPrint
          trigger={() => {
            return <button className="printButton">Print</button>;
          }}
          content={() => ref}
        />
        <div ref={(el) => (ref = el)} className="Bill">
          <div className="BillTitle">Teacher Remuneration Bill</div>
          <div className="smallTitle">
            <p>
              <b>Session:</b>
              {` ${session}`} <b>Semester:</b>
              {` ${semester}`}
            </p>
          </div>
          <div className="TeacherInfo">
            <div>
              <b>Teacher's name:</b> {` ${teachername}`}
            </div>
            <div>
              <b>Teacher's title:</b> {` ${teachertitle}`}
            </div>
            <div>
              <b>Teacher's department:</b> {` ${teacherdepartment}`}
            </div>
            <div>
              <b>Teacher's address:</b> {` ${teacheraddress}`}
            </div>
          </div>
          <div>
            <BillTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalTeacherBill;
