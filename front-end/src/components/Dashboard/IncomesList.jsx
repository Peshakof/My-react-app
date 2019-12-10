import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const IncomesList = (props) => {

  const incomes = props.incomes;
  return (
    <Fragment>
      {
        incomes.map(income => {
          income.date = income.date.slice(0, 10);
          return (
            <Link to={`/income-info/${income._id}`}>
            <tr key={income._id}>
              <td>{income.date}</td>
              <td>{income.category}</td>
              <td>{income.price}</td>
            </tr>
            </Link>
          )
        })
      }
    </Fragment>
  )
}

export default IncomesList;