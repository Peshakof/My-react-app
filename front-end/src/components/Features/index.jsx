import React, {useState, useEffect} from 'react';
import Calendar from '../Calendar';
import DonutChart from 'react-donut-chart';
import expenseService from '../../services/expense-service';
import getTotalAmount from './expense-helper';

import '../../variables.css';
import './Features.css';

function Features() {
  const [totalAmountOfExp, setTotalAmountOfExp] = useState(0);
  const [totalAmountOfIncome, setTotalAmountOfIncome] = useState(0);

  useEffect(() => {
    expenseService.getTotalExpensesAndIncome()
      .then((res)=>{
        let expensesTotal = getTotalAmount(res.data.expensesTotal);
        let incomeTotal = getTotalAmount(res.data.incomeTotal);

        setTotalAmountOfExp(expensesTotal)
        setTotalAmountOfIncome(incomeTotal);  
      })
      .catch(err=>{
        console.error(err);
      })
  }, [totalAmountOfIncome, setTotalAmountOfExp])

  return (
    <div className="Features">
      <section className="sec1">
        <header>
          <h1>Personal finance application that makes money management easy</h1>
        </header>
      </section>
      <section className="sec2">
        <h2>Features:</h2>
        <ul>
          <li>
            <p> Add your cash expenses manually in a few seconds</p>
          </li>
          <li>
            <p>Easily track where all your money goes at the end of the month</p>
          </li>
          <li>
            <p>Ultimate bill tracker, never forget to pay for gas, water, loan etc</p>
          </li>
          <li>
            <p>Check Account balances</p>
          </li>
          <li>
            <p></p>
          </li>
        </ul>
        <h3>Search by date</h3>
        <Calendar className={'calendar'} />
        <DonutChart outerRadius={0.55} innerRadius={0.40} colors={['red', 'green']}
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
    </div>
  )
}

export default Features;