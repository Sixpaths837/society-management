import React, { useState, useEffect } from "react";
import Axios from "axios";
import MakePaymentButton from "./MakePaymentForm";

function ShowPayment() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/showpayment").then((res) => {
      setArr(res.data);
    });
  }, [arr]);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Transaction Type</th>
            <th>Duration</th>
            <th>Pay</th>
          </tr>
        </thead>
        <tbody>
          {arr.message ? (
            <span className="text text-danger">{arr.message}</span>
          ) : (
            arr.map((info) => (
              <tr>
                <td>{info.Amount}</td>
                <td>{info.Transaction_Type}</td>
                <td>{info.Duration}</td>
                <td>
                  <MakePaymentButton
                    type="button"
                    className="btn btn-primary"
                    value={info.Payment_ID}
                  >
                    Make Payment
                  </MakePaymentButton>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ShowPayment;
