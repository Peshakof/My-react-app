import React from 'react';
import './Login.css';

function Login() {
    return(
        <div className="Login">
            <div id="bg"></div>

                <div id="wrapper">

                <form name="login-form" class="login-form" action="#" method="post">
                
                    <div class="header">
                        <h1>Login Form</h1>
                        <span>Fill out the form below to login.</span>
                    </div>
                
                    <div class="content">
                        <input name="username" type="text" class="input username" placeholder="Username" />
                        <div class="user-icon"></div>
                        <input name="password" type="password" class="input password" placeholder="Password" />
                        <div class="pass-icon"></div>		
                    </div>

                    <div class="footer">
                        <input type="submit" name="submit" value="Login" class="button" />
                        <input type="submit" name="submit" value="Register" class="register" />
                    </div>
                
                </form>

            </div>
        <div class="gradient"></div>
    </div>
    )
}

export default Login;