import React, { useContext, Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../Contexts/UserContext';
import sessionManager from '../../utils/session-manager';
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import './style.scss';

function Navigation() {
  const [user] = useContext(AuthContext);
  const [isLogged, setIslogged] = useState(false);
  const username = sessionManager.getUsername();

  useEffect(() => {
    setIslogged(user.isLogged);
  }, [user])

  return (
    <div className="Navigation">
      <input type="checkbox" id="toggle-nav" className="toggle-nav"></input>
      <div className="site-header">
        <label for="toggle-nav" className="toggle-nav-btn">
          <FontAwesome className="fas fa-bars"></FontAwesome>
          <FontAwesome className="fas fa-times"></FontAwesome>
        </label>
        <nav className="site-nav">
          <div className="header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt57yXJ1fa88cnfHo4s-zVVN2EKBaS4GRve1wrfB6ztwNw-mhBYA&s" width="80px" height="50px" alt="Logo"></img>
          </div>
          <ul>
            <Link className="link" to="/">
              <li className="active">Home</li>
            </Link>
            {isLogged ?
              <Fragment>
                <Link className="link" to="/user-profile">
                  <li className="active">hallo user: {username}</li>
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
              </Fragment>
              :
              <Fragment>
                <Link className="link" to="/login">
                  <li className="active">Login</li>
                </Link>
                <Link className="link" to="/register">
                  <li className="active">Register</li>
                </Link>

              </Fragment>
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navigation;
