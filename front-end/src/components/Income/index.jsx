import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../UserContext';
import { toast } from 'react-toastify';
import incomeValidator from '../../utils/IncomeValidator';
import incomeService from '../../services/income-servise';
import './AddIncome.css';

function AddIncome(props) {
  const [user] = useContext(AuthContext);
  const [userId, setUserId] = useState('');
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState('2019/11/01');
  const [category, setCategory] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    setUserId(user.userId)
  }, [user])

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

    const income = {
      price,
      date,
      category,
      text,
      user: userId
    }

    if (incomeValidator(income.category, income.price, income.date)) {
      incomeService.createIncome(income)
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
            <input name="price" type="number" class="feedback-input" id="price" placeholder="Price" onChange={updatePrice} />
          </p>

          <p><input type="date" class="feedback-input" placeholder="Date" id="date" onChange={updateDate} /></p>

          <select name="category" id="category" onChange={updateCategory}>
            <option value="">Category</option>
            <option value="Deposit">Deposit</option>
            <option value="Salary">Salary</option>
            <option value="Savings">Savings</option>
          </select>

          <p class="text">
            <textarea name="text" class="feedback-input" id="comment" placeholder="Comment" onChange={updateText}></textarea>
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