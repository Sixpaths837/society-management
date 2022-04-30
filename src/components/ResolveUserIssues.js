import Axios from "axios";
import React, { useEffect, useState } from "react";
import ResolveIssueButton from "./ResolveIssuesForm";
function ResolveUserIssues() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/showpendingissues").then((res) => {
      setArr(res.data);
    });
  }, [arr]);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Issue ID</th>
            <th>User ID</th>
            <th>Issue Subject</th>
            <th>Issue Description</th>
            <th>Reply</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((info) => (
            <tr key={info.Issue_ID}>
              <td>{info.Issue_ID}</td>
              <td>{info.User_ID}</td>
              <td>{info.Subject}</td>
              <td>{info.Description}</td>
              <td>
                <ResolveIssueButton
                  type="button"
                  className="btn btn-primary"
                  value={info.Issue_ID}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResolveUserIssues;
