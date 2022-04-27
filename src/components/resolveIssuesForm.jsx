import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function resolveUserIssuesForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center text-success"> Reply to the Issue</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Reply</label>
                  <input
                    placeholder="Enter Reply"
                    name="transactionMode"
                    className="form-control"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    autoComplete="off"
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
                  <h6>Submit</h6>
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

export default resolveUserIssuesForm;
