import React, { useState, useRef, useEffect } from "react";
import ReactToPrint from "react-to-print";
import "./FinalTeacherBill.css";
import DropdownNoTitleTeacher from "../../Functions/DropdownNoTitleTeacher";
import { useQuery, useMutation } from "@tanstack/react-query";
import { instance as axios } from "../axios";

const FinalTeacherBill = () => {
  const [sessionOptions, setSessionOptions] = useState([
    { name: "2016-17" },
    { name: "2017-18" },
    { name: "2018-19" },
    { name: "2019-20" },
    { name: "2020-21" },
  ]);

  const [semesterOptions, setSemesterOptions] = useState([
    { name: "1st" },
    { name: "2nd" },
    { name: "3rd" },
    { name: "4th" },
    { name: "5th" },
    { name: "6th" },
    { name: "7th" },
    { name: "8th" },
  ]);
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSession, setSelectedSession] = useState("");

  const [tableData, setTableData] = useState({
    qSetting: {
      criteria: "Question setting",
      courses: [
        {
          name: "",
        },
      ],
      amount: "",
    },
    qMod: {
      criteria: "Question moderation",
      courses: [
        {
          name: "",
        },
      ],
      amount: "",
    },
    ansCheck: {
      criteria: "Answerpaper checking",
      courses: [
        {
          name: "",
        },
      ],
      amount: "",
    },
    termTest: {
      criteria: "Termtest",
      courses: [
        {
          name: "",
        },
      ],
      amount: "",
    },
    practical: {
      criteria: "Practical exam",
      courses: [
        {
          name: "",
        },
      ],
      amount: "",
    },
    tabulation: {
      criteria: "Tabulation",
      courses: [
        {
          name: "",
        },
      ],
      amount: "",
    },
    viva: {
      criteria: "Viva",
      courses: [
        {
          name: "",
        },
      ],
      amount: "",
    },
    scrutiny: {
      criteria: "Scrutiny",
      courses: [
        {
          name: "",
        },
      ],
      amount: "",
    },
    ecmMember: {
      criteria: "Exam committee member payment",
      courses: [
        {
          name: "",
        },
      ],
      amount: "",
    },
    qTyping: {
      criteria: "Question typing",
      courses: [
        {
          name: "",
        },
      ],
      amount: "",
    },
    termPaper: {
      criteria: "Field work/ Project/ Term paper/ Seminar/ Monograph/ Thesis",
      courses: [
        {
          name: "",
        },
      ],
      amount: "",
    },
  });
  const [rows, setRows] = useState([]);
  const updateTable = (tableData) => {
    const temp = []
    for (let prop in tableData) {
      const data = tableData[prop];
      temp.push(
        <tr>
          <td className="criteriaCol">{data.criteria}</td>
          <td className="coursesCol">
            {data.courses.map((info, ind) => {
              return <p className="courses">{info.name}" "</p>;
            })}
          </td>
          <td className="amountCol">৳{data.amount}</td>
        </tr>
      );
    }
    setRows(temp)
  };

  useEffect(() => {
    updateTable(tableData);
  }, [tableData]);

  const [data, setData] = useState({
    session: "",
    semester: "",
  });

  const [sessionAvailable, setSessionAvailable] = useState(false);
  const [semesterAvailable, setSemesterAvailable] = useState(false);

  const session = "2018-19";
  const semester = "2nd";
  const teachername = "Ahsan Habib";
  const teachertitle = "Assistant professor";
  const teacherdepartment = "Software Engineering";
  const teacheraddress = "Surma";

  //fetch and update final bill

  // const fetchPaymentData = async (id) => {
  //   const response = await axios.get(`/department?institute=${id}`);
  //   console.log(response.data.data);
  //   return response;
  // };

  // useQuery(["dept-list", data.id], () => fetchPaymentData(data.id), {
  //   enabled: !!semesterAvailable && !!sessionAvailable,
  // });

  // handle session & semester
  const handleSession = (propName, option) => {
    const newData = { ...data };
    newData.session = option.name;
    setData(newData);
    setSessionAvailable(true);
  };

  const handleSemester = (propName, option) => {
    const newData = { ...data };
    newData.semester = option.name;
    setData(newData);
    setSemesterAvailable(true);
  };

  const ref = useRef();
  return (
    <>
      <div>
        <div className="TablePageHeader">
          <div className="generateBillTitle">Generate Bill</div>
          <div className="selectSessionSemester">
            <div className="selectSessionSemesterChild">
              <label className="AccountLabel">Session</label>
              <DropdownNoTitleTeacher
                options={sessionOptions}
                propName="session"
                handleData={handleSession}
                selected={selectedSession}
                setSelected={setSelectedSession}
              />
            </div>
            <div className="selectSessionSemesterChild">
              <label className="AccountLabel">Semester</label>
              <DropdownNoTitleTeacher
                options={semesterOptions}
                propName="semester"
                handleData={handleSemester}
                selected={selectedSemester}
                setSelected={setSelectedSemester}
              />
            </div>
          </div>
        </div>

        <div className="BillForm">
          <ReactToPrint
            trigger={() => {
              return <button className="printButton">Print</button>;
            }}
            content={() => ref.current}
          />
          <div ref={ref} className="Bill">
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
                <b>Name: </b> {` ${teachername}`}
              </div>
              <div>
                <b>Designation: </b> {` ${teachertitle}`}
              </div>
              <div>
                <b>Institute: </b> {` ${teacherdepartment}`}
              </div>
              <div>
                <b>Department: </b> {` ${teacherdepartment}`}
              </div>
              <div>
                <b>Address: </b> {` ${teacheraddress}`}
              </div>
              <div>
                <b>Bank Account no.: </b> {` ${teacheraddress}`}
              </div>
              <div>
                <b>Invoice ID: </b> {` ${teacheraddress}`}
              </div>
            </div>
            <div>
              <table className="PaymentBillTable">
                <thead>
                  <th>Criteria</th>
                  <th>Courses</th>
                  <th>Amount(BDT)</th>
                </thead>
                <tbody>
                  {rows}
                  <tr>
                    <td></td>
                    <td className="netAmount">Total</td>
                    <td className="amountCol">200 taka</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalTeacherBill;
