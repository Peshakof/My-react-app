import React from 'react';
import './Nav.css';

function Navigation(){
    return (
        <div className="Navigation">
            <div className="body">
                <nav>
                <div className="header">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt57yXJ1fa88cnfHo4s-zVVN2EKBaS4GRve1wrfB6ztwNw-mhBYA&s" width="80px" height="50px" alt="Logo"></img>
                </div>
                <ul>
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Wallet</a></li>
                    <li><a href="#">Ballance</a></li>
                    <li><a href="#">Income</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
                </nav>
            </div>     
        </div>    
    )   
}

export default Navigation;
