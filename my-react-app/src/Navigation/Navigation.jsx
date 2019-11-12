import React from 'react';
import {Link} from 'react-router-dom'
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
                    <Link className="link" to="/">
                    <li className="active">Home</li>
                    </Link>
                    <Link className="link" to="/dashboard">
                    <li className="active">Dashboard</li>
                    </Link>
                    <Link className="link" to="/add-expense">
                    <li className="active">Add Expense</li>
                    </Link>
                    <Link className="link" to="/add-income">
                    <li className="active">Add Income</li>
                    </Link>
                    <Link className="link" to="/logout">
                    <li className="active">Logout</li>
                    </Link>
                    
                </ul>
                </nav>
            </div>     
        </div>    
    )   
}

export default Navigation;
