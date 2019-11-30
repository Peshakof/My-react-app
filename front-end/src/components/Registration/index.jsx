import React, { Component } from 'react';
import userService from '../../services/user-service'
import registerValidator from '../../utils/registerValidation';

import './Register.css';


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
            userService.register(username, password);
            this.props.history.push('/login');
        }      
    }

    render() {
        return(
            <div className="Register">
                <div id="bg"></div>
    
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
    
                <div className="gradient"></div>
            </div>    
        )
    }
}

export default Register;