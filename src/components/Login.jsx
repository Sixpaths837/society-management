import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [logIn, setLogIn] = useState(false);
  async function loginUser() {
    await Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((res) => {
      if (res.data.message) {
        setErr(res.data.message);
      } else {
        alert("Logged In!");
        setLogIn(true);
      }
    });
  }

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center text-success"> Login</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    placeholder="Username"
                    name="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
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
                  onClick={loginUser}
                  style={{
                    marginLeft: "2%",
                    borderRadius: "7px",
                    width: "46%",
                  }}
                >
                  <h6>Login</h6>
                </a>
                <Link
                  className="btn btn-danger"
                  to="/society-management/register/"
                  style={{ marginLeft: "6%", width: "46%" }}
                >
                  <h6>Register</h6>
                </Link>
              </form>
              <br />
              <hr width="100%" style={{ borderTop: "1px solid grey" }}></hr>
              <b>
                <h5>
                  <span className="text-danger">
                    {err === "" ? null : err}
                    <br />
                    {logIn === true ? <br /> : ""}
                    {logIn === true ? (
                      <a
                        href="http://localhost:3000/society-management/dashboard"
                        className="btn btn-primary"
                        style={{ marginLeft: "2%", width: "46%" }}
                      >
                        Click here for Dashboard
                      </a>
                    ) : (
                      ""
                    )}
                    {logIn === true ? <br /> : ""}
                  </span>
                </h5>
              </b>
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

export default Login;
