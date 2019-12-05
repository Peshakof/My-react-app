import React, { useContext, useState, useEffect } from 'react';
import Calendar from '../Calendar';
import expenseValidator from '../../utils/expenseValidator';
import expenseService from '../../services/expense-service';
import { toast } from 'react-toastify';
import { AuthContext } from '../UserContext';
import './Expense.css';
import 'react-toastify/dist/ReactToastify.css';

function AddExpense(props) {
    const [user] = useContext(AuthContext);
    const [userId, setUserId] = useState('');
    const [merchant, setMerchant] = useState('');
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState('2019/11/01');
    const [category, setCategory] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        setUserId(user.userId)
    }, [user])

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
            user: userId
        }

        if (expenseValidator(expense.merchant, expense.price, expense.date)) {
            expenseService.createExpense(expense)
                .then(() => {
                    toast.success('Added new expense!');
                    props.history.push('/dashboard');
                })
                .catch(err => {
                    toast.error(err);
                });
        }
    }


    return (
        <div id="form-expense">
            <div id="form-div">
                <form className="form" id="form1" onSubmit={handleSubmit}>
                    <p className="merchant">
                        <input name="merchant" type="text" className="feedback-input" placeholder="Merchant" id="merchant" value={merchant} onChange={updateMerchant} />
                    </p>

                    <p className="price">
                        <input name="price" type="number" className="feedback-input" id="price" placeholder="Price" value={price} onChange={updatePrice} />
                    </p>

                    <p className="date">
                        <Calendar className={'feedback-input'} />
                        {/* <input name="date" type="date" className="feedback-input" id="date" value={this.state.date} onChange={this.handleChange} /> */}
                    </p>

                    <select name="category" id="category" value={category} onChange={updateCategory}>
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
                        <textarea name="text" className="feedback-input" id="comment" placeholder="Comment" value={text} onChange={updateText}></textarea>
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