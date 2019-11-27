import axios from 'axios';

const host = 'http://localhost:8080/api';

const expenseRequester = {
  getAll: () => {
    return axios.get(`${host}/expense/getExpenses`);
  },

  
}

export default expenseRequester;