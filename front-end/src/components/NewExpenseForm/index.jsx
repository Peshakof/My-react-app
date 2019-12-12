import React, {useState} from 'react';
import expenseValidator from '../../utils/expenseValidator';
import expenseService from '../../services/expense-service';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ExpenseForm(props) {
  console.log(props)
  const id = props.id;
  const [merchant, setMerchant] = useState('');
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [text, setText] = useState('');
  const updateMerchant = (e) => {
    setMerchant(e.target.value)
  }

  const updatePrice = (e) => {
    setPrice(e.target.value)
  }

  const updateDate = (e) => {
    setDate(e.target.value)
  }

  const updateCategory = (e) => {
    setCategory(e.target.value)
  }

  const updateText = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      merchant,
      price,
      date,
      category,
      text,
    }

    if (expenseValidator(expense.merchant, expense.price, expense.date)) {
      expenseService.updateExpense(id, expense)
        .then((response) => {
          toast.success(response.data);
        })
        .catch(err=>{
          toast.error(err);
        })
    }
  }

  return (
    <div id="form-div">
      <form className="form" id="form1" onSubmit={handleSubmit}>
        <p className="merchant">
          <input name="merchant" type="text" className="feedback-input" placeholder={props.expense.merchant} id="merchant" value={merchant} onChange={updateMerchant} />
        </p>

        <p className="price">
          <input name="price" type="number" className="feedback-input" id="price" placeholder={props.expense.price} value={price} onChange={updatePrice}/>
        </p>

        <p className="date">
          <input name="date" type="date" className="feedback-input" id="date" value={date} onChange={updateDate}/>
        </p>

        <select name="category" id="category" onChange={updateCategory}>
          <option value="">{props.expense.category}</option>
          <option value="Bills">Bills</option>
          <option value="Rents">Rents</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Clothes">Clothes</option>
          <option value="Pet">Pet</option>
          <option value="House">House</option>
          <option value="Transport">Transport</option>
          <option value="Food">Food</option>
          <option value="Toiletry">Toiletry</option>
          <option value="Health">Health</option>
        </select>

        <p className="text">
          <textarea name="text" className="feedback-input" id="comment" placeholder='Description' value={text} onChange={updateText}>
            {props.expense.text}
          </textarea>
        </p>

        <div className="submit">
          <input type="submit" value="Edit expense" id="button-blue" />
          <div className="ease"></div>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm;