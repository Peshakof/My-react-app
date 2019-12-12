import React, { Component } from 'react';
import ExpensesList from './ExpenseList';
import IncomesList from './IncomesList';
import ExpenseDonutChart from '../Donut-charts/ExpenseDonutChart';
import IncomeDonutChart from '../Donut-charts/IncomeDonutChart';
import expenseService from '../../services/expense-service';
import incomeService from '../../services/income-servise';
import { AuthContext } from '../Contexts/UserContext';

import './style.css';

class Dashboard extends Component {

  static contextType = AuthContext;
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
      incomes: []
    }
  }

  componentDidMount() {
    const userId = this.context[0].userId;
    expenseService.getAll(userId)
      .then(res => {
        this.setState({ expenses: res.data })
      })

    incomeService.getAll(userId)
      .then(res => {
        this.setState({ incomes: res.data });
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
                <ExpensesList expenses={this.state.expenses} />
              </tbody>
            </table>
          </div>
        </section>
        <ExpenseDonutChart expenses={this.state.expenses} />

        <section className="table-wrap">
          <h1>Incomes history</h1>
          <div className="tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Amount</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                <IncomesList incomes={this.state.incomes} />
              </tbody>
            </table>
          </div>
        </section>
        <IncomeDonutChart incomes={this.state.incomes} />
      </div>
    )
  }
}

export default Dashboard;