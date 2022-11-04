import "./FinalTeacherBill.css";

function BillTable() {
  const TotalAmount = "৳0";

  const tableData = [
    { criteria: "Question setting", course: "null", amount: 0 },
    { criteria: "Question moderation", course: "null", amount: 0 },
    { criteria: "Answerpaper checking", course: "null", amount: 0 },
    { criteria: "Termtest", course: "null", amount: 0 },
    { criteria: "Practical exam", course: "null", amount: 0 },
    { criteria: "Tabulation", course: "null", amount: 0 },
    { criteria: "Viva", course: "null", amount: 0 },
    { criteria: "Scrutiny", course: "null", amount: 0 },
    { criteria: "Chairman payment", course: "null", amount: 0 },
    { criteria: "Question typing", course: "null", amount: 0 },
    {
      criteria: "Field work/ Project/ Term paper/ Seminar/ Monograph/ Thesis",
      course: "null",
      amount: 0,
    },
    { criteria: "Post expense", course: "null", amount: 0 },
    { criteria: "Others", course: "null", amount: 0 },
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
            <td className="netAmount">
              Total
            </td>
            <td className="amountCol">{TotalAmount}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default BillTable;
