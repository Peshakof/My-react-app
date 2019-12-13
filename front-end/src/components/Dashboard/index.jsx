import React, { Component } from 'react';
import ExpensesList from './ExpenseList';
import IncomesList from './IncomesList';
import ExpenseDonutChart from '../Donut-charts/ExpenseDonutChart';
import IncomeDonutChart from '../Donut-charts/IncomeDonutChart';
import expenseService from '../../services/expense-service';
import incomeService from '../../services/income-servise';
import { AuthContext } from '../Contexts/UserContext';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './style.css';

class Dashboard extends Component {

  static contextType = AuthContext;
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
      incomes: [],
      startDate: '',
      endDate: '',
      startDateIncome: '',
      endDateIncome: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitExpense = this.handleSubmitExpense.bind(this);
    this.handleSubmitIncome = this.handleSubmitIncome.bind(this);
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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleChangeIncome(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmitExpense(e) {
    e.preventDefault();
    const startDate = this.state.startDate;
    const endDate = this.state.endDate;
    expenseService.getAll(this.context[0].userId)
      .then((res)=>{
        const searchedExpenses = res.data.filter((e)=>{
          return e.date >= startDate && e.date <= endDate;
        })

        if(endDate < startDate){
          toast.error('Second date must be after the first date');
          return;
        }

        if(!searchedExpenses.length){
          toast.error('There is no expenses in this period.');
          return;
        }
        this.setState({expenses: searchedExpenses});
        return;
      })
      .catch(err=>{
        console.error(err);
      });
  }

  handleSubmitIncome(e) {
    e.preventDefault();
    const start = this.state.startDateIncome;
    const end = this.state.endDateIncome;
    incomeService.getAll(this.context[0].userId)
      .then((response)=>{
        const searchedIncomes = response.data.filter((e)=>{
          return e.date >= start && e.date <= end;
        })

        if(end < start){
          toast.error('Second date must be after the first date');
          return;
        }

        if(!searchedIncomes.length){
          toast.error('There is no incomes in this period.');
          return;
        }
        this.setState({incomes: searchedIncomes});
      })
      .catch(err=>{
        console.error(err);
      });
  }

  render() {

    return (
      <div className="Dashboard" >
        <form className="calendar-wrap" onSubmit={this.handleSubmitExpense}>
          <label htmlFor="startDate">from: </label>
          <input type="date" name="startDate" className="calendar" value={this.state.startDate} onChange={this.handleChange}/>
          <label htmlFor="endDate">to: </label>
          <input type="date" name="endDate" id="endDate" className="calendar" value={this.state.endDate} onChange={this.handleChange}/>
          <input type="submit" value="search expenses" className="search" />
        </form>
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

        <form className="calendar-wrap" onSubmit={this.handleSubmitIncome}>
          <label htmlFor="startDate">from: </label>
          <input type="date" name="startDateIncome" className="calendar" value={this.state.startDateIncome} onChange={this.handleChange}/>
          <label htmlFor="endDate">to: </label>
          <input type="date" name="endDateIncome" id="endDate" className="calendar" value={this.state.endDateIncome} onChange={this.handleChange}/>
          <input type="submit" value="search incomes" className="search" />
        </form>
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