import axios from 'axios';

const host = 'https://mern-stack-expense-tracker.herokuapp.com/api';
// const host = 'http://localhost:8080/api';

const expenseRequester = {
  getAll: (userId) => {
    return axios.get(`${host}/expense/getExpenses/${userId}`);
  },

  getCurrentExpense: (id) => {
    return axios.get(`${host}/expense/expense-info/${id}`);
  },

  removeCurrentExpense: (id, userId) => {
    return axios.put(`${host}/expense/remove/${id}`, {userId});
  },

  createExpense: (expense) => {
    return axios.post(`${host}/expense/addExpense`, expense);
  },

  getTotalExpensesAndIncome: () => {
    return axios.get(`${host}/expense/getTotalExpensesAndIncome`);
  },

  updateExpense: (id, expense) => {
    return axios.put(`${host}/expense/update/${id}`, expense);
  }

}

export default expenseRequester;