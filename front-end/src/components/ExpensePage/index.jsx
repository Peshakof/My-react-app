import React from 'react';
import './style.css';

function ExpensePage() {
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
              <h3 className="product-description-section-title">Amount: <span className="pricing">$15.00</span></h3>
              <p>Date of purchase: 29-11-2019 </p>
              <p>Merchant: Sushi mushi</p>
              <p>Category: food </p>

            </div>
            <div className="overview product-description-section">
              <h3 className="product-description-section-title">Description:</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab tempora tenetur quod nemo nobis. Animi, cum, sit quaerat quisquam ullam, reiciendis minus cumque dicta voluptatem porro hic quo veritatis.</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <button className="save left">Edit <i className="fa fa-star"></i></button>
          <button className="right" id="add-to-cart">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ExpensePage;