import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import registerValidator from '../../utils/registerValidation';

import './Register.css';
import 'react-toastify/dist/ReactToastify.css';

const host = 'http://localhost:8080/api';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            repeatPass: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();

        const username = this.state.username
        const password = this.state.password
        const repeatPass = this.state.repeatPass
        
        if(registerValidator(username, password, repeatPass)) {
    
            axios
                .post(`${host}/user/register`, {username, password, repeatPass})
                .then(res => {
                    toast.success('Successfully registered');
                })
                .catch(err => {
                    console.error(err);
            });
        }      
    }

    render() {
        return(
            <div className="Register">
                <div id="bg"></div>
    
                <div id="wrapper">
    
                <form className="register-form" onSubmit={this.handleSubmit}>
                
                    <div className="header">
                    <h1>Register Form</h1>
                    <span>Fill out the form below to register.</span>
                    </div>
                
                    <div className="content">
                    <input name="username" type="text" className="input username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                    <div className="user-icon"></div>
                    <input name="password" type="password" className="input password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                    <div className="pass-icon"></div>	
                    <input name="repeatPass" type="password" className="input password" placeholder="Repeat Password" value={this.state.confirmPass} onChange={this.handleChange}/>
                    <div className="pass-icon"></div>	
                    </div>
    
                    <div className="footer">
                    <input type="submit" name="submit" value="Login" className="login-btn" />
                    <input type="submit" name="submit" value="Register" className="register-btn" />
                    </div>
                
                </form>
    
                </div>
                <div className="gradient"></div>
            </div>    
        )
    }
}

export default Register;