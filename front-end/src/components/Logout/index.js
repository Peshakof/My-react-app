import React, {useContext} from 'react';
import {AuthContext} from '../Contexts/UserContext';
import { Redirect } from 'react-router-dom';
import userService from '../../services/user-service';
import sessionManager from '../../utils/session-manager';

function Logout() {
  const [user, setUserStatus] = useContext(AuthContext);
  userService.logout();
  setUserStatus({isLogged: sessionManager.isLogged(), userId: ''});
  return(
    <Redirect to='/login' />
  )
}

export default Logout;