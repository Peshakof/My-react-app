import React, { useState, useEffect, useContext, Fragment } from 'react';
import { TransactionContext } from '../Contexts/TransactionsContext';
import { AuthContext } from '../Contexts/UserContext';
import expenseService from '../../services/expense-service';
import incomeService from '../../services/income-servise';
import ExpenseForm from '../NewExpenseForm';
import EditIncomeForm from '../EditIncomeForm';

import { toast } from 'react-toastify';
import './style.scss';
import 'react-toastify/dist/ReactToastify.css';

function ExpensePage(props) {

  const [typeOfTransaction] = useContext(TransactionContext);
  const [user] = useContext(AuthContext);
  const [state, setState] = useState({});
  const id = props.match.params.id;

  function removeExpense() {
    expenseService.removeCurrentExpense(id, user.userId)
      .then((res) => {
        toast.success(res.data)
        props.history.push('/dashboard')
      })
      .catch(err => {
        toast.error(err)
      })
  }

  function removeIncome() {
    incomeService.removeCurrentIncome(id, user.userId)
      .then((res) => {
        toast.success(res.data)
        props.history.push('/dashboard')
      })
      .catch(err => {
        toast.error(err);
      });
  }

  useEffect(() => {
    if (typeOfTransaction === 'expense') {
      expenseService.getCurrentExpense(id)
        .then((res) => {
          setState(res.data)
        })
        .catch(err => {
          console.error(err)
        })
    }
    else if (typeOfTransaction === 'income') {
      incomeService.getCurrentIncome(id)
        .then((res) => {
          setState(res.data)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }, [id, state, typeOfTransaction]);

  return (

    <div className="expense-page">
      {typeOfTransaction === 'expense' ?

        <Fragment>
          <div className="mobile-container">
            <div className="header">
              <h1 className="title">Expense overview</h1>
            </div>
            <div className="jumbo-tron">
              <div className="image-close-up"></div><img id="product-image" src="https://www.journalofaccountancy.com/content/dam/jofa/issues/2016/nov/reimbursement-fraud.jpg" alt="Main Product" />
            </div>
            <div className="product-details-wrapper">
              <div className="product-details">
                <div className="overview product-description-section">
                  <h3 className="product-description-section-title">Amount: <span className="pricing">{state.price}$</span></h3>
                  <p>Date of purchase: {state.date}</p>
                  <p>Merchant: {state.merchant}</p>
                  <p>Category: {state.category} </p>

                </div>
                <div className="overview product-description-section">
                  <h3 className="product-description-section-title">Description:</h3>
                  {state.text ?
                    <p>{state.text}</p> :
                    <p>...no description added yet!</p>
                  }
                </div>
              </div>
            </div>
            <div className="expenseForm-footer">
              <button onClick={removeExpense} className="right" id="remove">Delete</button>
            </div>
          </div>
          <ExpenseForm expense={state} id={id} />
        </Fragment> :

        <Fragment>
          <div className="mobile-container">
            <div className="header">
              <h1 className="title">Income overview</h1>
            </div>
            <div className="jumbo-tron">
              <div className="image-close-up"></div><img id="product-image" src="https://www.journalofaccountancy.com/content/dam/jofa/issues/2016/nov/reimbursement-fraud.jpg" alt="Main Product" />
            </div>
            <div className="product-details-wrapper">
              <div className="product-details">
                <div className="overview product-description-section">
                  <h3 className="product-description-section-title">Amount: <span className="pricing">{state.price}$</span></h3>
                  <p>Date of income: {state.date}</p>
                  <p>Category: {state.category} </p>
                </div>
                <div className="overview product-description-section">
                  <h3 className="product-description-section-title">Description:</h3>
                  {state.text ?
                    <p>{state.text}</p> :
                    <p>...no description added yet!</p>
                  }
                </div>
              </div>
            </div>
            <div className="expenseForm-footer">
              <button onClick={removeIncome} className="right" id="remove">Delete</button>
            </div>
          </div>
          <EditIncomeForm income={state} id={id} />
        </Fragment>
      }
    </div>
  )
}

export default ExpensePage;