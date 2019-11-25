import axios from 'axios';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const host = 'http://localhost:8080/api';

const userRequester = {
  register: (username, password) => {
    return axios
      .post(`${host}/user/register`, {
        username,
        password,
        // repeatPass
      })
      .then(res => {
        toast.success('Successfully registered');
      })
      .catch(err => {
        console.error(err);
      });
  },

  login: (username, password) => {
    axios
      .post(`${host}/user/login`, {
        username,
        password
      })
      .then(() => {
        toast.success('You successfully logged in!');
      })
      .catch(err => {
        console.error(err);
      });
  }
}

export default userRequester;