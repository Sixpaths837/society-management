import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function createHouse(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card bg-dark col-md-6 offset-md-3 offset-md-3">

              <br></br>
            <h3 className="text-center text-success"> Add House</h3>


            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>House Number</label>
                  <input
                    placeholder="Enter House Number"
                    name="transactionMode"
                    className="form-control"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label>Type of House</label>
                  <input
                    type="transactionNumber"
                    placeholder="Enter Type of House"
                    name="transactionNumber"
                    className="form-control"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                  <div className="form-group">
                      <label>Block Number</label>
                      <input
                          type="transactionNumber"
                          placeholder="Enter Block Number"
                          name="transactionNumber"
                          className="form-control"
                          value={password}
                          onChange={(e) => {
                              setPassword(e.target.value);
                          }}
                      />
                  </div>
                  <div className="form-group">
                      <label>Society ID</label>
                      <input
                          type="transactionNumber"
                          placeholder="Enter Society ID"
                          name="transactionNumber"
                          className="form-control"
                          value={password}
                          onChange={(e) => {
                              setPassword(e.target.value);
                          }}
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

export default createHouse();
