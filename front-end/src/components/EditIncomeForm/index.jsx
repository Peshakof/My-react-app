import React from 'react';
import incomeValidator from '../../utils/IncomeValidator';
import incomeService from '../../services/income-servise';
import useInput from '../../hooks/useInputChange';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditIncomeForm(props) {
  const id = props.id
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
      incomeService.updateIncome(id, { price, date, category, text })
        .then((response) => {
          toast.success(response.data);
        })
        .catch(err => {
          toast.error(err);
        })
    }
  }

  return (
    <div id="form-div">
      <form class="form" id="form1" onSubmit={handleSubmit}>

        <p class="price">
          <input name="price" type="number" class="feedback-input" id="price" placeholder={props.income.price} {...bindPrice} />
        </p>

        <p>Date<input type="date" class="feedback-input" id="date" {...bindDate} /></p>

        <select name="category" id="category" placeholder={props.income.category} {...bindCategory}>
          <option value="">Category</option>
          <option value="Deposit">Deposit</option>
          <option value="Salary">Salary</option>
          <option value="Savings">Savings</option>
        </select>

        <p class="text">
          <textarea name="text" class="feedback-input" id="comment" placeholder="Comment" {...bindText}>{props.income.text}</textarea>
        </p>

        <div class="submit">
          <input type="submit" value="Edit income" id="button-blue" />
          <div class="ease"></div>
        </div>
      </form>
    </div>
  )
}

export default EditIncomeForm;