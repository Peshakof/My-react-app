import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import DonutChart from 'react-donut-chart';
import expenseService from '../../services/expense-service';
import getTotalAmount from './expense-helper';
import { AuthContext } from '../Contexts/UserContext';

import '../../variables.css';
import './style.css';

function Features() {
  const [totalAmountOfExp, setTotalAmountOfExp] = useState(0);
  const [totalAmountOfIncome, setTotalAmountOfIncome] = useState(0);
  const [user] = useContext(AuthContext);

  useEffect(() => {
    expenseService.getTotalExpensesAndIncome()
      .then((res) => {
        let expensesTotal = getTotalAmount(res.data.expensesTotal);
        let incomeTotal = getTotalAmount(res.data.incomeTotal);

        setTotalAmountOfExp(expensesTotal)
        setTotalAmountOfIncome(incomeTotal);
      })
      .catch(err => {
        console.error(err);
      })
  }, [totalAmountOfIncome, setTotalAmountOfExp])

  return (
    <div className="features">
      <section className="sec1">
        <header>
          <h1>Personal finance application that makes money management easy</h1>
        </header>
        <h2>Features:</h2>
        <ul>
          <li>
            <p>Intuitive and easy-to-use user interface</p>
          </li>
          <li>
            <p> Add your cash expenses manually in a few seconds</p>
          </li>
          <li>
            <p>Easily track where all your money goes at the end of the month</p>
          </li>
          <li>
            <p>See your spendings distribution on the chart</p>
          </li>
          <li>
            <p>Check Account balances</p>
          </li>

        </ul>
      </section>
      {
        user.isLogged ?
          <Fragment>
            <section className="sec2">
              {/* <h3>Search by date</h3>
        <Calendar className={'calendar'} /> */}
              <DonutChart className="features-donut" outerRadius={0.8} innerRadius={0.6} colors={['red', 'green']}
                data={[
                  {
                    label: 'Expenses',
                    value: totalAmountOfExp
                  },
                  {
                    label: 'Income',
                    value: totalAmountOfIncome
                  }
                ]} />
            </section>
            <ul>
              <li className="red">
                <Link className="addExpense" to="/add-expense">
                  +
                </Link>
                <span>add expense</span>
              </li>
              <li className="green">
                <Link className="addIncome" to="/add-income">
                  -
                </Link>
                <span>add income</span>
              </li>
            </ul>
          </Fragment>
          :
          <Fragment>
            <section className="footer">
              <header>
                <h3>Don`t have un accont?</h3>
                <Link className="link" to="/register">
                  <li className="active">Go to Register Page</li>
                </Link>
              </header>
            </section>
          </Fragment>
      }

    </div>
  )
}

export default Features;