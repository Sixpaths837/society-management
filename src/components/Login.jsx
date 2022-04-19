import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  loginUser = (e) => {
    Axios.post("http://localhost:3001/login", {
      username: this.state.username,
      password: this.state.password,
    }).then((res) => {
      console.log(res);
    });
    e.preventDefault();
  };
  render() {
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
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />
                  <button
                    className="btn btn-success"
                    onClick={this.loginUser}
                    style={{
                      marginLeft: "2%",
                      borderRadius: "7px",
                      width: "46%",
                    }}
                  >
                    <h6>Login</h6>
                  </button>
                  <Link
                    className="btn btn-danger"
                    to="/Sixpaths837/society-management/register/"
                    style={{ marginLeft: "6%", width: "46%" }}
                  >
                    <h6>Register</h6>
                  </Link>
                </form>
                <br />
                <hr width="100%" style={{ borderTop: "1px solid grey" }}></hr>
              </div>
              <br />
              <br />
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
}

export default Login;
