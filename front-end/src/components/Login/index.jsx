import React, { Component } from 'react';
import signInValidator from '../../utils/loginFormValidator';
import userService from '../../services/user-service';

import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        const username = this.state.username;
        const password = this.state.password;

        if(signInValidator(username, password)) {
            userService.login(username, password)
        }        
    }

    render() {
        return (
            <div className="Login">
                <div id="bg"></div>

                <div id="wrapper">

                    <form name="login-form" className="login-form" onSubmit={this.handleSubmit}>

                        <div className="header">
                            <h1>Login Form</h1>
                            <span>Fill out the form below to login.</span>
                        </div>

                        <div className="content">
                            <input name="username" type="text" className="input username" 
                            placeholder="Username" value={this.state.username}
                            onChange={this.handleChange}/>
                            <div className="user-icon"></div>
                            <input name="password" type="password" className="input password"
                            placeholder="Password" value={this.state.password}
                            onChange={this.handleChange} />
                            <div className="pass-icon"></div>
                        </div>

                        <div className="footer">
                            <input type="submit" name="submit" value="Login" className="button" />
                            <input type="submit" name="submit" value="Register" className="register" />
                        </div>

                    </form>

                </div>
                <div className="gradient"></div>
            </div>
        )
    }
}

export default Login;