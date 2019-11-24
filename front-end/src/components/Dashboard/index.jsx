import React, { Component, Fragment } from 'react';
import DonutChart from '../Donut-chart';
// import ExpenseCard from './expense-card';
import axios from 'axios';

import './Dashboard.css';
// import expenseValidator from '../../utils/expenseValidator';

const host = 'http://localhost:8080/api';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: []
        }

        this.renderAllExpenses = this.renderAllExpenses.bind(this);
    }

    componentDidMount() {
        axios
            .get(`${host}/expense/getExpenses`)
            .then((response) => {
                this.setState({ expenses: response.data });
            })
            .catch(err => {
                console.error(err)
            });
    }

    renderAllExpenses() {
        const expenses = this.state.expenses;

        return(
            <Fragment>
                {
                    expenses.map(expense => {
                        expense.date = expense.date.slice(0, 10);
                        return(
                            <tr key={expense._id}>
                                <td>{expense.date}</td>
                                <td>{expense.category}</td>
                                <td>{expense.merchant}</td>
                                <td>{expense.price}</td>
                            </tr>
                        )
                    })
                }
            </Fragment>
        )
    }

    render() {

        return (
        <div className="Dashboard">    
            <section className="table-wrap">
                {/* for demo wrap */}
                <h1>Expenses history</h1>
                <div className="tbl-header">
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Merchant</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="tbl-content">
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            {this.renderAllExpenses()}
                        </tbody>
                    </table>
                </div>    
            </section>
            {/* <Chart /> */}
            <DonutChart />
        </div>    
        )
    }
}

export default Dashboard;