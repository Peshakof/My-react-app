import React from 'react';
import './Register.css';

function Register() {
    return(
        <div classNameName="Register">
            <div id="bg"></div>

            <div id="wrapper">

            <form className="register-form" action="#" method="post">
            
                <div className="header">
                <h1>Register Form</h1>
                <span>Fill out the form below to register.</span>
                </div>
            
                <div className="content">
                <input name="username" type="text" className="input username" placeholder="Username" />
                <div className="user-icon"></div>
                <input name="password" type="password" className="input password" placeholder="Password" />
                <div className="pass-icon"></div>	
                <input name="repeat-pss" type="password" className="input password" placeholder="Repeat Password" />
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

export default Register;