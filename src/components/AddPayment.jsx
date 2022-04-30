import React, { useState } from "react";
import Axios from "axios";

function AddPayment(props) {
  const [user, setUser] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [ttype, setTtype] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (user && amount && duration && ttype) {
      Axios.post("http://localhost:3001/addpayments", {
        amount: amount,
        ttype: ttype,
        dur: duration,
        userid: user,
      }).then((res) => {
        if (res.data.message === "OK") {
          alert("Payment Added!");
        } else {
          alert("An Error Occured!");
        }
      });
    }
  }
  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div
            className="card bg-dark col-6 offset-md-3 offset-md-3"
            style={{ minHeight: "100px", overflow: "hidden" }}
          >
            <br />
            <h3 className="text-center text-success"> Add Payment</h3>

            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>User ID</label>
                  <input
                    type="text"
                    placeholder="Enter User ID"
                    name="transactionNumber"
                    className="form-control"
                    value={user}
                    onChange={(e) => {
                      setUser(e.target.value);
                    }}
                    autoComplete="off"
                  />
                  <label>Amount</label>
                  <input
                    type="text"
                    placeholder="Enter Amount"
                    name="amount"
                    className="form-control"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    autoComplete="off"
                  />
                  <label>Duration</label>
                  <input
                    type="text"
                    placeholder="Enter Duration"
                    name="duration"
                    className="form-control"
                    value={duration}
                    onChange={(e) => {
                      setDuration(e.target.value);
                    }}
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label>Transaction Type</label>
                  <input
                    type="text"
                    placeholder="Enter Transaction Type"
                    name="transanctiontype"
                    className="form-control"
                    value={ttype}
                    onChange={(e) => {
                      setTtype(e.target.value);
                    }}
                    autoComplete="off"
                  />
                </div>

                <br />
                <button
                  className="btn btn-success"
                  style={{
                    marginLeft: "2%",
                    borderRadius: "7px",
                    width: "46%",
                  }}
                  onClick={handleSubmit}
                >
                  <h6>Confirm</h6>
                </button>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPayment;
