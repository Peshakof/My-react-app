import axios from 'axios';

const host = 'http://localhost:8080/api';

const incomeRequester = {
  createIncome: (income) => {
    return axios.post(`${host}/income/addIncome`, income);
  },

  getAll: (userId) => {
    return axios.get(`${host}/income/getAll/${userId}`);
  },

  getCurrentIncome: (id) => {
    return axios.get(`${host}/income/getCurrentIncome/${id}`);
  },

  removeCurrentIncome: (id, userId) => {
    return axios.put(`${host}/income/remove/${id}`, {userId});
  }
}

export default incomeRequester;