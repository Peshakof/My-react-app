import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const ExpenseList = (props) => {

  const expenses = props.expenses;
  return (
    <Fragment>
      {
        expenses.map(expense => {
          expense.date = expense.date.slice(0, 10);
          return (
            <Link to={`/expense-info/${expense._id}`}>
            <tr key={expense._id}>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>{expense.merchant}</td>
              <td>{expense.price}</td>
            </tr>
            </Link>
          )
        })
      }
    </Fragment>
  )
}

export default ExpenseList;