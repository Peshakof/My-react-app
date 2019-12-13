import React, { Fragment, useContext } from 'react';
import {TransactionContext} from '../Contexts/TransactionsContext';
import {Link} from 'react-router-dom';

const IncomesList = (props) => {
  const [typeOfTransaction, setType] = useContext(TransactionContext);

  function changeType() {
    setType('income');
  }

  const incomes = props.incomes;
  return (
    <Fragment>
      {
        incomes.map(income => {
          income.date = income.date.slice(0, 10);
          return (
            <Link key={income._id} onClick={changeType} to={`/income-info/${income._id}`}>
            <tr >
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