import React, { useContext } from 'react';
import useInput from '../../hooks/useInputChange';
import { AuthContext } from '../UserContext';
import { toast } from 'react-toastify';
import incomeValidator from '../../utils/IncomeValidator';
import incomeService from '../../services/income-servise';
import './style.css';

function AddIncome(props) {
  const [user] = useContext(AuthContext);

  const [price, bindPrice, updatePrice] = useInput(0);
  const [date, bindDate, updateDate] = useInput('');
  const [category, bindCategory, updateCategory] = useInput('');
  const [text, bindText, updateText] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();

    updatePrice()
    updateDate()
    updateCategory()
    updateText()

    if (incomeValidator(price, date, category)) {
      incomeService.createIncome({price, date, category, text, user: user.userId})
        .then((res) => {
          toast.success(res.data);
          props.history.push('/dashboard');
        })
        .catch(err => {
          toast.error(err);
        });
    }
  }

  return (
    <div id="form-income">
      <div id="form-div">
        <form class="form" id="form1" onSubmit={handleSubmit}>

          <p class="price">
            <input name="price" type="number" class="feedback-input" id="price" placeholder="Price" {...bindPrice} />
          </p>

          <p><input type="date" class="feedback-input" placeholder="Date" id="date" {...bindDate}/></p>

          <select name="category" id="category" {...bindCategory}>
            <option value="">Category</option>
            <option value="Deposit">Deposit</option>
            <option value="Salary">Salary</option>
            <option value="Savings">Savings</option>
          </select>

          <p class="text">
            <textarea name="text" class="feedback-input" id="comment" placeholder="Comment" {...bindText}></textarea>
          </p>

          <div class="submit">
            <input type="submit" value="Add income" id="button-blue" />
            <div class="ease"></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddIncome;