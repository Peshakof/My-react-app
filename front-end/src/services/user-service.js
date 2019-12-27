import axios from 'axios';
import { toast } from 'react-toastify';
import sessionManager from '../utils/session-manager';

import 'react-toastify/dist/ReactToastify.css';

const host = 'https://mern-stack-expense-tracker.herokuapp.com/api';

const userRequester = {
  register: (username, password) => {
    axios
      .post(`${host}/user/register`, {
        username,
        password,
        // repeatPass
      })
      .then(() => {
        toast.success('Successfully registered');
      })
      .catch(err => {
        console.error(err);
      });
  },

  login: (username, password) => {
    return axios
      .post(`${host}/user/login`, {
        username,
        password
      })
  },

  logout: () => {
    axios.post(`${host}/user/logout`)
      .then((res) => {
        sessionManager.clear()
        toast.success(`${res.data}`);
      })
  }
}

export default userRequester;