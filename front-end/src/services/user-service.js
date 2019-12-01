import axios from 'axios';
import { toast } from 'react-toastify';
import sessionManager from '../utils/session-manager';

import 'react-toastify/dist/ReactToastify.css';

const host = 'http://localhost:8080/api';

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
   axios
      .post(`${host}/user/login`, {
        username,
        password
      })
      .then((res) => {
        const { token, user } = res.data;
        sessionManager.save(token, user.username);
        toast.success('You successfully logged in!');
      })
      .catch(err => {
        toast.error('Incorrect username or password!');
        return false;
      });
  },
  
  logout: () => {
    axios.post(`${host}/user/logout`)
      .then((res) => {
        sessionManager.clear()
        toast.success(`${res}`);
      })
  }
}

export default userRequester;