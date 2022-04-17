import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            confirmpassword: '',
            mobilenum: '',
            emailid: '',
            carreg: '',
        }

        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeConfirmPasswordHandler = this.changeConfirmPasswordHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);
        this.changeCarHandler = this.changeCarHandler.bind(this);
    }

    changeUsernameHandler = (event) => {
        this.setState({ username: event.target.value })
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value })
    }
    changeConfirmPasswordHandler = (e) => {
        this.setState({ confirmpassword: e.target.value })
    }
    changeEmailHandler = (e) => {
        this.setState({ emailid: e.target.value })
    }
    changeMobileHandler = (e) => {
        this.setState({ mobilenum: e.target.value })
    }
    changeCarHandler = (e) => {
        this.setState({ carreg: e.target.value })
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
                                        <input placeholder="Username" name="username" className="form-control"
                                            value={this.state.username} onChange={this.changeUsernameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" placeholder="Password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input type="password" placeholder="Confirm Password" name="confirmpassword" className="form-control"
                                            value={this.state.confirmpassword} onChange={this.changeConfirmPasswordHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>EmailID</label>
                                        <input placeholder="EmailID" name="emailid" className="form-control"
                                            value={this.state.emailid} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile Number</label>
                                        <input placeholder="Mobile Number" name="mobilenumber" className="form-control"
                                            value={this.state.mobilenum} onChange={this.changeMobileHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Car Registration Number</label>
                                        <input placeholder="Car Registration Number" name="carreg" className="form-control"
                                            value={this.state.carreg} onChange={this.changeCarHandler} />
                                    </div>
                                    <br/>
                                    <button className="btn btn-danger" onClick={this.loginUser} style={{ marginLeft: "19%", borderRadius: "7px", width: "62%" }} ><h6>Register</h6></button>

                                </form>
                            </div>
                            <br /><br />
                        </div>
                    </div>
                    <br /><br />
                </div>
                <br /><br />
            </div>
        );
    }
}

export default Register;