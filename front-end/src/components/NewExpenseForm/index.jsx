import React from 'react';
import expenseValidator from '../../utils/expenseValidator';
import expenseService from '../../services/expense-service';
import useInput from '../../hooks/useInputChange';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ExpenseForm(props) {
  const id = props.id;

  const [merchant, bindMerchant, updateMerchant] = useInput('');
  const [price, bindPrice, updatePrice] = useInput(0);
  const [date, bindDate, updateDate] = useInput('');
  const [category, bindCategory, updateCategory] = useInput('');
  const [text, bindText, updateText] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();

    updateMerchant()
    updatePrice()
    updateDate()
    updateCategory()
    updateText()

    if (expenseValidator(merchant, price, date)) {
      expenseService.updateExpense(id, {merchant, price, date, category, text})
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
          <input name="merchant" type="text" className="feedback-input" placeholder={props.expense.merchant} id="merchant" {...bindMerchant} />
        </p>

        <p className="price">
          <input name="price" type="number" className="feedback-input" id="price" placeholder={props.expense.price} {...bindPrice}/>
        </p>

        <p className="date">
          <input name="date" type="date" className="feedback-input" id="date" {...bindDate}/>
        </p>

        <select name="category" id="category" {...bindCategory}>
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
          <textarea name="text" className="feedback-input" id="comment" placeholder='Description' {...bindText}>
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