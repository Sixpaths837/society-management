import React, { useState } from "react";
import Axios from "axios";

function Issues(props) {
  const [complaint, setComplaint] = useState("");
  const [subject, setSubject] = useState("");
  const [err, setError] = useState({});

  function registerComplain(e) {
    Axios.post("http://localhost:3001/issues", {
      username: this.props.user,
      complaint: complaint,
      subject: subject,
    }).then((res) => {
      console.log(res);
      alert("Complaint Registered");
    });
    console.log(this.state);
    e.preventDefault();
  }
  function check() {
    if (subject !== null && complaint !== null) {
      setError({});
    } else {
      setError({ subject: "Enter subject/complaint!" });
    }
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center text-danger"> Issues</h3>
            <div className="card-body">
              <form onChange={check}>
                <div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      aria-describedby="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Description</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="description"
                      value={complaint}
                      onChange={(e) => setComplaint(e.target.value)}
                    />
                    <span className="txt-danger">
                      {err === {} ? "" : err.subject}
                    </span>
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={registerComplain}
                    style={{ borderRadius: "7px", width: "62%" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Issues;
