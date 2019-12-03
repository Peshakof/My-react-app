import React, {useState, useEffect} from 'react';
import expenseService from '../../services/expense-service';
import './style.css';

function ExpensePage(props) {

  const [state, setState] = useState({});
  const id = props.match.params.id;
  useEffect(() => {
    expenseService.getCurrentExpense(id)
      .then((res)=>{
        setState(res.data)
        
      })
    }, [id]);
    
  return (
    
    <div className="expense-page">

      <div className="mobile-container">
        <div className="header">
          <div className="nav">
            <div className="back left"><i className="fa fa-long-arrow-left"></i></div>
            <div className="cart right"><i className="fa fa-shopping-cart"></i></div>
          </div>
        </div>
        <div className="jumbo-tron">
          <h1 className="jumbo-tron-product-title">Expense overview</h1>
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
              {state.description ? 
              <p>{state.description}</p> : 
              <p>...no description added yet!</p>
              }
            </div>
          </div>
        </div>
        <div className="expenseForm-footer">
          <button className="save left">Edit <i className="fa fa-star"></i></button>
          <button className="right" id="add-to-cart">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ExpensePage;