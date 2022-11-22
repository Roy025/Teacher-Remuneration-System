import React from 'react';
import "./FinalTeacherBill.css";

function BillTable() {
  const TotalAmount = "৳0";

  const tableData = [
    { criteria: "Question setting", course: "", amount: 0 },
    { criteria: "Question moderation", course: "", amount: 0 },
    { criteria: "Answerpaper checking", course: "", amount: 0 },
    { criteria: "Termtest", course: "", amount: 0 },
    { criteria: "Practical exam", course: "", amount: 0 },
    { criteria: "Tabulation", course: "", amount: 0 },
    { criteria: "Viva", course: "", amount: 0 },
    { criteria: "Scrutiny", course: "", amount: 0 },
    { criteria: "Chairman payment", course: "", amount: 0 },
    { criteria: "Question typing", course: "", amount: 0 },
    {
      criteria: "Field work/ Project/ Term paper/ Seminar/ Monograph/ Thesis",
      course: "",
      amount: 0,
    },
    { criteria: "Post expense", course: "", amount: 0 },
    { criteria: "Others", course: "", amount: 0 },
  ];

  return (
    <>
      <table className="PaymentBillTable">
        <thead>
          <th>Criteria</th>
          <th>Courses</th>
          <th>Amount(BDT)</th>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr>
                <td className="criteriaCol">{data.criteria}</td>
                <td className="coursesCol">{data.course}</td>
                <td className="amountCol">৳{data.amount}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td className="netAmount">Total</td>
            <td className="amountCol">{TotalAmount}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default BillTable;
