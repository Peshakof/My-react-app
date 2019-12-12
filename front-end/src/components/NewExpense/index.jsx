import React, { useContext, useState, useEffect } from 'react';
import useInput from '../../hooks/useInputChange';
import expenseValidator from '../../utils/expenseValidator';
import expenseService from '../../services/expense-service';
import { toast } from 'react-toastify';
import { AuthContext } from '../UserContext';
import './Expense.css';
import 'react-toastify/dist/ReactToastify.css';

function AddExpense(props) {
  const [user] = useContext(AuthContext);
  const [userId, setUserId] = useState('');

  const [merchant, bindMerchant, updateMerchant] = useInput('');
  const [price, bindPrice, updatePrice] = useInput(0);
  const [date, bindDate, updateDate] = useInput('');
  const [category, bindCategory, updateCategory] = useInput('');
  const [text, bindText, updateText] = useInput('');

  useEffect(() => {
    setUserId(user.userId)
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault();

    updateMerchant()
    updatePrice()
    updateDate()
    updateCategory()
    updateText()

    if (expenseValidator(merchant, price, date)) {
      expenseService.createExpense({merchant, price, date, category, text, user: userId})
        .then((response) => {
          toast.success(response.data);
          props.history.push('/dashboard');
        })
        .catch(err=>{
          toast.error(err);
        })
    }
  }

  return (
    <div id="form-expense">
      <div id="form-div">
        <form className="form" id="form1" onSubmit={handleSubmit}>
          <p className="merchant">
            <input name="merchant" type="text" className="feedback-input" placeholder="Merchant" id="Merchant" {...bindMerchant}/>
          </p>

          <p className="price">
            <input name="price" type="number" className="feedback-input" id="price" placeholder="Price" {...bindPrice} />
          </p>

          <p className="date">
            <input name="date" type="date" className="feedback-input" id="date" {...bindDate}/>
          </p>

          <select name="category" id="category" {...bindCategory}>
            <option value="">Category</option>
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
            <textarea name="text" className="feedback-input" id="comment" placeholder="Comment" {...bindText}></textarea>
          </p>

          <div className="submit">
            <input type="submit" value="Add expense" id="button-blue" />
            <div className="ease"></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddExpense;