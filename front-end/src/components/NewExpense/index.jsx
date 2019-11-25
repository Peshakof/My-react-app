import React from 'react';
import axios from 'axios';
import expenseValidator from '../../utils/expenseValidator';
import { toast } from 'react-toastify';

import './Expense.css';
import 'react-toastify/dist/ReactToastify.css';

const host = 'http://localhost:8080/api';

class AddExpense extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            merchant: '',
            price: 0,
            date: '2019/11/01',
            category: '',
            text: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const expense = {
            merchant: this.state.merchant,
            price: this.state.price,
            date: this.state.date,
            category: this.state.category,
            text: this.state.text
        }

        if(expenseValidator(expense.merchant, expense.price, expense.date)) {

            axios
                .post(`${host}/expense/addExpense`, expense)
                .then(res => {
                    toast.success('Added new expense!');
                    this.props.history.push('/dashboard');
                }) 
                .catch(err => {
                    toast.error(err);
                });   
        }

    }

    render() {
        return (
            <div id="form-expense">
                <div id="form-div">
                    <form className="form" id="form1" onSubmit={this.handleSubmit}>
                        <p className="merchant">
                            <input name="merchant" type="text" className="feedback-input" placeholder="Merchant" id="merchant" value={this.state.merchant} onChange={this.handleChange} />
                        </p>

                        <p className="price">
                            <input name="price" type="number" className="feedback-input" id="price" placeholder="Price" value={this.state.price} onChange={this.handleChange} />
                        </p>

                        <p>
                            <input name="date" type="date" className="feedback-input" placeholder="Date" id="date" value={this.state.date} onChange={this.handleChange} />
                        </p>

                        <select name="category" id="category" value={this.state.category} onChange={this.handleChange}>
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
                            <textarea name="text" className="feedback-input" id="comment" placeholder="Comment" value={this.state.text} onChange={this.handleChange}></textarea>
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
}

export default AddExpense;