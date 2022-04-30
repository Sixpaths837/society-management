import React, { useEffect, useState } from "react";
import Axios from "axios";

function CompletedPayments() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/showdonepayments").then((res) => {
      setArr(res.data);
    });
  }, [arr]);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Amount</th>
            <th>Transaction Type</th>
            <th>Duration</th>
            <th>User ID</th>
            <th>Transaction Mode</th>
            <th>Transaction Number</th>
          </tr>
        </thead>
        <tbody>
          {arr.message ? (
            <span className="text text-danger">{arr.message}</span>
          ) : (
            arr.map((info) => (
              <tr>
                <td>{info.Payment_ID}</td>
                <td>{info.Amount}</td>
                <td>{info.Transaction_Type}</td>
                <td>{info.Duration}</td>
                <td>{info.User_ID}</td>
                <td>{info.Transaction_Mode}</td>
                <td>{info.Bank_Transaction_Number}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CompletedPayments;
