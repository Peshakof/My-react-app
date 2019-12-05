import React, { useState, useContext } from 'react';
import signInValidator from '../../utils/loginFormValidator';
import userService from '../../services/user-service';
import { AuthContext } from '../UserContext';

import './Login.css';

function Login(props) {
    const [isLogged, setUserStatus] = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const updateName = e => {
        setUsername(e.target.value);
    };

    const updatePassword = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (signInValidator(username, password)) {
            userService.login(username, password)
            setUserStatus(true)
            console.log(isLogged)
            props.history.push('/');
        }
    }

    return (
        <div className="Login">
            <div id="bg"></div>

            <div id="wrapper">

                <form name="login-form" className="login-form" onSubmit={handleSubmit}>

                    <div className="header">
                        <h1>Login Form</h1>
                        <span>Fill out the form below to login.</span>
                    </div>

                    <div className="content">
                        <input name="username" type="text" className="input username"
                            placeholder="Username" value={username}
                            onChange={updateName} />
                        <div className="user-icon"></div>
                        <input name="password" type="password" className="input password"
                            placeholder="Password" value={password}
                            onChange={updatePassword} />
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

export default Login;