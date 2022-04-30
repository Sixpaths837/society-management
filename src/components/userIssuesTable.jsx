import React, { useEffect, useState } from "react";
import Axios from "axios";

function ViewReply() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/viewreply").then((res) => {
      setArr(res.data);
    });
  }, [arr]);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Issue ID</th>
            <th>Issue Subject</th>
            <th>Reply</th>
          </tr>
        </thead>
        <tbody>
          {arr.message ? (
            <span className="text text-danger">{arr.message}</span>
          ) : (
            arr.map((info, index) => (
              <tr key={index}>
                <td>{info.Issue_ID}</td>
                <td>{info.Subject}</td>
                <td>{info.Reply}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewReply;
