import React from 'react';
import DonutChart from 'react-donut-chart';
import getTotalAmount from './getTotalAmount'

import './style.css';

function ExpenseDonutChart(props) {

  const expenses = props.expenses;

  const totalRents = getTotalAmount('Rents', expenses);
  const totalClothes = getTotalAmount('Clothes', expenses);
  const healthTotal = getTotalAmount('Health', expenses);
  const petTotal = getTotalAmount('Pet', expenses);
  const toiletryTotal = getTotalAmount('Toiletry', expenses);
  const entertainmentTotal = getTotalAmount('Entertainment', expenses);
  const foodTotal = getTotalAmount('Food', expenses);
  const houseTotal = getTotalAmount('House', expenses);
  const totalBills = getTotalAmount('Bills', expenses);
  const transportTotal = getTotalAmount('Transport', expenses);

  return (
    <div className="donut-wrap">
      <DonutChart className="donut"
        outerRadius={0.85}
        innerRadius={0.65}
        data={[
          {
            label: 'Rents',
            value: totalRents
          },
          {
            label: 'Clothes',
            value: totalClothes
          },
          {
            label: 'Health',
            value: healthTotal
          },
          {
            label: 'Pet',
            value: petTotal
          },
          {
            label: 'Entertainment',
            value: entertainmentTotal
          },
          {
            label: 'Toiletry',
            value: toiletryTotal
          },
          {
            label: 'Food',
            value: foodTotal
          },
          {
            label: 'Bills',
            value: totalBills
          },
          {
            label: 'House',
            value: houseTotal
          },
          {
            label: 'Transport',
            value: transportTotal
          },
        ]} />
    </div>
  )
}

export default ExpenseDonutChart;
