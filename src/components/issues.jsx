import React, { Component } from "react";
import Axios from "axios";

class Issues extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complaint: "",
      subject: "",
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
    Axios.post("http://localhost:3001/issues", {
      complaint: this.state.complaint,
      subject: this.state.subject,
    }).then((res) => {
      console.log(res);
      alert("Complaint Registered");
    });
    console.log(this.state);
    e.preventDefault();
  };
  check() {
    var complaint = this.state.complaint;
    var subject = this.state.subject;

    if (subject !== null && complaint !== null) {
      this.setState({ err: { subject: "" } });
    } else {
      this.setState({ err: { subject: "Enter subject/complaint!" } });
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center text-danger"> Issues</h3>
              <div className="card-body">
                <form>
                  <div>
                    <div class="form-group">
                      <label for="subject" class="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="subject"
                        aria-describedby="subject"
                        value={this.state.subject}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <label for="description" class="form-label">
                        Description
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="description"
                        value={this.state.complaint}
                        onChange={this.handleChange}
                      />
                    </div>

                    <button
                      type="submit"
                      class="btn btn-danger"
                      onClick={this.registerUser}
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
}
export default Issues;
