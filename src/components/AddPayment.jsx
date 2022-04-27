import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function AddPayment(props) {




  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card  col-md-6 offset-md-3 offset-md-3">

              <br></br>
            <h3 className="text-center text-success"> Add Payment</h3>

              <div className="form-group">
                  <label>User ID</label>
                  <input
                      type="transactionNumber"
                      placeholder="Enter Block Number"
                      name="transactionNumber"
                      className="form-control"

                  />
              </div>

            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Amount</label>
                  <input
                      type="transactionNumber"
                    placeholder="Enter House Number"
                    name="transactionMode"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Duration</label>
                  <input
                    type="transactionNumber"
                    placeholder="Enter Type of House"
                    name="transactionNumber"
                    className="form-control"

                  />
                </div>


                  <div className="form-group">
                      <label>Transaction Type</label>
                      <input
                          type="transactionNumber"
                          placeholder="Enter Society ID"
                          name="transactionNumber"
                          className="form-control"

                      />
                  </div>


                <br />
                <a
                  href="http://localhost:3000/society-management/dashboard"
                  className="btn btn-success"

                  style={{
                    marginLeft: "2%",
                    borderRadius: "7px",
                    width: "46%",
                  }}
                >
                  <h6>Confirm</h6>
                </a>

              </form>
              <br />


            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default AddPayment;
