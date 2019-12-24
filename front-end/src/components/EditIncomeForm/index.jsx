import React from 'react';
import incomeValidator from '../../utils/IncomeValidator';
import incomeService from '../../services/income-servise';
import useInput from '../../hooks/useInputChange';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

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
    <div className="form-div edit">
      <form className="form" id="form1" onSubmit={handleSubmit}>

        <p className="price">
          <input name="price" type="number" className="feedback-input" id="price" placeholder={props.income.price} {...bindPrice} />
        </p>

        <p>
          <input type="date" className="feedback-input" id="date" {...bindDate} />
        </p>

        <select name="category" id="category" placeholder={props.income.category} {...bindCategory}>
          <option value="">Category</option>
          <option value="Deposit">Deposit</option>
          <option value="Salary">Salary</option>
          <option value="Savings">Savings</option>
        </select>

        <p className="text">
          <textarea name="text" className="feedback-input" id="comment" placeholder="Comment" {...bindText}>{props.income.text}</textarea>
        </p>

        <div className="submit">
          <input type="submit" value="Edit income" id="button-blue" />
          <div className="ease"></div>
        </div>
      </form>
    </div>
  )
}

export default EditIncomeForm;