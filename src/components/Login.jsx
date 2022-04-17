import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        // const Auth = React.useContext(AuthAPI)
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }
    
    changeUsernameHandler = (event) => {
        this.setState({ username: event.target.value })
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value })
    }
    loginUser() {
        
    }
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
                                        <input placeholder="Username" name="username" className="form-control"
                                            value={this.state.username} onChange={this.changeUsernameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" placeholder="Password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                    <br/>                                    
                                    <button className="btn btn-success" onClick={this.loginUser} style={{ marginLeft: "2%", borderRadius: "7px", width: "46%" }} ><h6>Login</h6></button>
                                    <Link className="btn btn-danger" to ='/Sixpaths837/society-management/register/' style={{ marginLeft: "6%", width: "46%" }}><h6>Register</h6></Link>

                                </form>
                                <br />
                                <hr width="90%" style={{ borderTop: "1px solid grey" }}></hr>
                            </div>
                            <br /><br />
                        </div>
                    </div>
                    <br /><br />
                </div>
                <br /><br /><br /><br /><br />
            </div>
        );
    }
}

export default Login;