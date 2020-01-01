import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import expenseService from '../../services/expense-service';
import incomeService from '../../services/income-servise';
import calculateTotalAmount from '../Features/expense-helper';
import { AuthContext } from '../Contexts/UserContext';
import sessionManager from '../../utils/session-manager';

import './style.css';

function UserProfile() {

  const [expensesCount, setExpensesCount] = useState(0);
  const [incomesCount, setIncomesCount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [incomesTotal, setIncomesTotal] = useState(0);
  const [user] = useContext(AuthContext);
  const username = sessionManager.getUsername();

  useEffect(() => {
    Promise.all([
      expenseService.getAll(user.userId),
      incomeService.getAll(user.userId)
    ])
      .then(([expenses, incomes]) => {
        setExpensesCount(expenses.data.length)
        setIncomesCount(incomes.data.length)
        setExpensesTotal(calculateTotalAmount(expenses.data))
        setIncomesTotal(calculateTotalAmount(incomes.data))
        setBalance(incomesTotal - expensesTotal)
      })
      .catch(err => {
        console.error(err);
      });
  })

  return (
    <Fragment>
      <h1 className="title-pen"> User Profile <span>UI</span></h1>
      <div className="user-profile">
        <img className="avatar" src="https://shiftprofile.com/wp-content/uploads/2018/08/interviewer-profile-1-300x300.png" alt="Ash" />
        <div className="username">{username}</div>

        <ul className="data">
          <li>
            You have:
            <span> {expensesCount} </span>
            expenses in total.
          </li>
          <li>
            You have:
            <span> {incomesCount} </span>
            incomes in total.
          </li>
          <li>
            Your balance is:
            {balance > 0 ?
              <span className="positive"> {balance}</span>
              :
              <span className="negative"> {balance}</span>
            }
          </li>
        </ul>
        <section className="footer">
          <h1>To view more detailed info
          <Link to="/dashboard">
              <span className="entypo-dribbble"></span> click here.
          </Link>
          </h1>
        </section>
      </div>

    </Fragment>
  )
}

export default UserProfile;