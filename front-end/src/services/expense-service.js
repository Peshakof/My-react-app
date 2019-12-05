import axios from 'axios';

const host = 'http://localhost:8080/api';

const expenseRequester = {
  getAll: () => {
    return axios.get(`${host}/expense/getExpenses`);
  },

  getCurrentExpense: (id) => {
    return axios.get(`${host}/expense/expense-info/${id}`);
  },

  removeCurrentExpense: (id) => {
    return axios.delete(`${host}/expense/remove/${id}`);
  },

  createExpense: (expense) => {
    return axios.post(`${host}/expense/addExpense`, expense);
  }

}

export default expenseRequester;