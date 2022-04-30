import React, { useState } from "react";
import Axios from "axios";

function SearchUser(props) {
  const [username, setUsername] = useState("");
  const [res, setRes] = useState(false);
  const [nores, setNores] = useState("");
  const [arr, setArr] = useState([]);

  const handleRes = () => {
    setRes(!res);
  };
  function handleSearch(e) {
    setNores("");
    e.preventDefault();
    if (username) {
      Axios.post("http://localhost:3001/gethousedeets", {
        User_ID: username,
      }).then((res) => {
        if (res.data.err) {
          alert("An Error has Occurred!");
        } else {
          if (res.data.length > 0) {
            setRes(true);
            setArr(res.data);
          } else {
            setNores("no");
          }
        }
      });
    } else {
      alert("Enter a User to Search");
    }
  }
  function deleteUser(e) {
    e.preventDefault();
    Axios.post("http://localhost:3001/deleteuser", {
      User_ID: e.target.value,
    }).then((res) => {
      if (res.data.message) {
        alert(res.data.message);
      }
    });
  }
  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card bg-dark col-md-6 offset-md-3 offset-md-3">
            <br />
            <h3 className="text-center text-danger"> Search User</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>User Id</label>
                  <input
                    placeholder="User Id"
                    name="query"
                    className="form-control"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    autoComplete="off"
                  />
                </div>
                <br />
                {!res ? (
                  <button
                    className="btn btn-success"
                    style={{
                      marginLeft: "2%",
                      borderRadius: "7px",
                      width: "46%",
                    }}
                    onClick={handleSearch}
                  >
                    <h6>Search</h6>
                  </button>
                ) : (
                  <div>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Username</th>
                          <th>House No.</th>
                          <th>Block No.</th>
                          <th>Society</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {arr.map((info) => (
                          <tr>
                            <td>{info.User_ID}</td>
                            <td>{info.House_Number}</td>
                            <td>{info.Block_Number}</td>
                            <td>{info.Name_of_Society}</td>
                            <td>
                              <button
                                onClick={deleteUser}
                                className="btn btn-danger"
                                value={info.User_ID}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <br />
                    <button
                      className="btn btn-danger"
                      style={{
                        marginLeft: "2%",
                        borderRadius: "7px",
                        width: "46%",
                      }}
                      onClick={handleRes}
                    >
                      <h6>Go Back</h6>
                    </button>
                  </div>
                )}
              </form>
              <br />
              {nores === "no" ? (
                <span className="text text-danger">No Result Found</span>
              ) : res ? (
                <span className="text text-danger">
                  Warning: Deleting a user deletes all of his payments,
                  including the outstanding ones
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchUser;
