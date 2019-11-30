import React, { Component } from 'react';
import Expenses from './ExpenseList';
import DonutChart from '../Donut-chart';
import expenseService from '../../services/expense-service';

import './Dashboard.css';


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: []
        }
    }

    componentDidMount() {
        expenseService.getAll()
            .then(res => {
                this.setState({ expenses: res.data})
            })
    }

    render() {

        return (
        <div className="Dashboard">    
            <section className="table-wrap">
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
                            <Expenses expenses={this.state.expenses} />
                        </tbody>
                    </table>
                </div>    
            </section>
            <DonutChart expenses={this.state.expenses}/>
        </div>    
        )
    }
}

export default Dashboard;