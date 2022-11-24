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
        "",
      ],
      amount: "",
    },
    qMod: {
      criteria: "Question moderation",
      courses: [
        "",
      ],
      amount: "",
    },
    ansCheck: {
      criteria: "Answerpaper checking",
      courses: [
        "",
      ],
      amount: "",
    },
    termTest: {
      criteria: "Termtest",
      courses: [
        "",
      ],
      amount: "",
    },
    practical: {
      criteria: "Practical exam",
      courses: [
        "",
      ],
      amount: "",
    },
    tabulation: {
      criteria: "Tabulation",
      courses: [
        "",
      ],
      amount: "",
    },
    viva: {
      criteria: "Viva",
      courses: [
        "",
      ],
      amount: "",
    },
    scrutiny: {
      criteria: "Scrutiny",
      courses: [
        "",
      ],
      amount: "",
    },
    ecmMember: {
      criteria: "Exam committee member payment",
      courses: [
        "",
      ],
      amount: "",
    },
    qTyping: {
      criteria: "Question typing",
      courses: [
        "",
      ],
      amount: "",
    },
    invi: {
      criteria: "Invigilation",
      courses: [
        "",
      ],
      amount: "",
    },
    termPaper: {
      criteria: "Field work/ Project/ Term paper/ Seminar/ Monograph/ Thesis",
      courses: [
        "",
      ],
      amount: "",
    },
  });
  const [rows, setRows] = useState([]);
  const [total, settotal] = useState(0);
  const updateTable = (tableData) => {
    const temp = []
    let count = 0;
    for (let prop in tableData) {
      const data = tableData[prop];
      count += data.amount
      temp.push(
        <tr>
          <td className="criteriaCol">{data.criteria}</td>
          <td className="coursesCol">
            {data.courses.map((info, ind) => {
              return <p className="courses">{info} </p>;
            })}
          </td>
          <td className="amountCol">৳{data.amount}</td>
        </tr>
      );
    }
    settotal(count);
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

  //fetch and update final bill

  const fetchPaymentData = async (id) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("accesstoken"),
      },
    };
    const response = await axios.get(`Bill?Semester=${selectedSemester}&Session=${selectedSession}`, config);
    console.log(response.data.data);
    setTableData(response.data.data)
    return response;
  };

  useQuery(["payment-data", data.id], () => fetchPaymentData(data.id), {
    enabled: !!semesterAvailable && !!sessionAvailable,
  });

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

  const [richData, setRichData] = useState({});

  //fetch teacher data

  const fetchRich = async () => {
    const id = localStorage.getItem("id");
    const config = {
      headers: {
        Authorization: localStorage.getItem("accesstoken"),
      },
    };
    const response = await axios.get(`/Teacher/${id}`);
    console.log(response.data.data);
    setRichData(response.data.data)
    return response;
  };

  useQuery(["rich-data"], () => fetchRich(), {
    enabled: !!semesterAvailable && !!sessionAvailable,
  });

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
                {` ${selectedSession}`} <b>Semester:</b>
                {` ${selectedSemester}`}
              </p>
            </div>
            <div className="TeacherInfo">
              <div>
                <b>Name: </b> {richData.name ? richData.name : ""}
              </div>
              <div>
                <b>Designation: </b> {richData.designation ? richData.designation : ""}
              </div>
              <div>
                <b>Department: </b> {richData.department ? richData.department.name : ""}
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
                    <td className="amountCol">৳{total}</td>
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
