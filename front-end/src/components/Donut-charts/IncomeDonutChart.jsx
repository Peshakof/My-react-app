import React from 'react';
import DonutChart from 'react-donut-chart';
import getTotalAmount from './getTotalAmount'

import './style.css';

function IncomeDonutChart(props) {

  const incomes = props.incomes;

  const totalDeposits = getTotalAmount('Deposit', incomes);
  const totalSalary = getTotalAmount('Salary', incomes);
  const totalSavings = getTotalAmount('Savings', incomes);

  return (
    <div className="donut-wrap">
      <DonutChart className="donut"
        outerRadius={0.85}
        innerRadius={0.65}
        data={[
          {
            label: 'Deposit',
            value: totalDeposits
          },
          {
            label: 'Salary',
            value: totalSalary
          },
          {
            label: 'Savings',
            value: totalSavings
          }
         
        ]} />
    </div>
  )
}

export default IncomeDonutChart;
