import React, { Fragment } from 'react';

const ExpenseList = (props) => {
  const expenses = props.expenses;
  return (
    <Fragment>
      {
        expenses.map(expense => {
          expense.date = expense.date.slice(0, 10);
          return (
            <tr key={expense._id}>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>{expense.merchant}</td>
              <td>{expense.price}</td>
            </tr>
          )
        })
      }
    </Fragment>
  )
}

export default ExpenseList;