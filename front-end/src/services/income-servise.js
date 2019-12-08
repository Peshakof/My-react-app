import axios from 'axios';

const host = 'http://localhost:8080/api';

const incomeRequester = {
  createIncome: (income) => {
    return axios.post(`${host}/income/addIncome`, income);
  },
}

export default incomeRequester;