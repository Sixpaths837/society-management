import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirmpassword: "",
      name: "",
      hno: "",
      err: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.check = this.check.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  registerUser = (e) => {
    if (this.state.username !== "") {
      e.preventDefault();
      Axios.post("http://localhost:3001/register", {
        username: this.state.username,
        password: this.state.password,
        nam: this.state.name,
        hno: this.state.hno,
      }).then((res) => {
        console.log(res);
      });
      alert("User Registered");
    } else {
      alert("Please fill the form");
    }
  };
  check() {
    var password = this.state.password;
    var conpass = this.state.confirmpassword;

    if (password.length < 8 && conpass.length < 8) {
      this.setState({ err: { conpass: "Passwords are too short!" } });
    } else if (password === conpass) {
      this.setState({ err: { conpass: "" } });
    } else {
      this.setState({ err: { conpass: "Passwords don't Match!" } });
    }
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center text-danger"> Register</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      placeholder="Username"
                      name="username"
                      className="form-control"
                      required
                      value={this.state.username}
                      onChange={this.handleChange}
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
                      required
                      pattern=".{8,}"
                      title="Eight or more characters"
                      value={this.state.password}
                      onChange={this.handleChange}
                      onKeyUp={this.check}
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmpassword"
                      className="form-control"
                      required
                      value={this.state.confirmpassword}
                      onChange={this.handleChange}
                      onKeyUp={this.check}
                    />
                    <span className="text-danger">
                      {this.state.err.conpass === ""
                        ? null
                        : this.state.err.conpass}
                    </span>
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      required
                      value={this.state.name}
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <label>House Number</label>
                    <input
                      placeholder="House Number"
                      name="hno"
                      className="form-control"
                      type="text"
                      required
                      value={this.state.hno}
                      onChange={this.handleChange}
                      onKeyUp={this.check}
                      autoComplete="off"
                    />
                    <span className="text-danger">
                      {this.state.err.hno === "" ? null : this.state.err.hno}
                    </span>
                  </div>
                  <br />
                  <button
                    className="btn btn-danger"
                    onClick={this.registerUser}
                    style={{ borderRadius: "7px", width: "62%" }}
                  >
                    <Link
                      className="btn btn-danger"
                      to={
                        this.state.username !== ""
                          ? "/society-management/"
                          : "/society-management/register"
                      }
                      style={{ marginLeft: "6%", width: "46%" }}
                    >
                      <h6>Register</h6>
                    </Link>
                  </button>
                </form>
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
      </div>
    );
  }
}

export default Register;
