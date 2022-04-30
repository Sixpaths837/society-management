import React, { useState } from "react";
import Axios from "axios";

function Issues() {
  const [complaint, setComplaint] = useState("");
  const [subject, setSubject] = useState("");
  const [err, setError] = useState({});

  function registerComplain(e) {
    e.preventDefault();

    if (subject && complaint) {
      Axios.post("http://localhost:3001/addissue", {
        subject: subject,
        desc: complaint,
      }).then((res) => {
        console.log(res);
        alert("Complaint Registered with IssueID: " + res.data.Issue_Id);
      });
    } else {
      alert("Please Fill the Form!");
    }
  }
  function check() {
    if (subject && complaint) {
      setError({});
    } else {
      setError({ subject: "Enter subject/complaint!" });
    }
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-6 offset-md-3 offset-md-3">
            <h3 className="text-center text-danger">Report an Issue</h3>
            <div className="card-body">
              <form onChange={check}>
                <div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      aria-describedby="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      autoComplete="off"
                    />
                    <label className="form-label">Description</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="description"
                      placeholder="Description"
                      aria-describedby="description"
                      value={complaint}
                      onChange={(e) => setComplaint(e.target.value)}
                      autoComplete="off"
                    />
                    <span className="txt-danger">
                      {err === {} ? "" : err.subject}
                    </span>
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary"
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
