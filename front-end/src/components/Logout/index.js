import React from 'react';
// import {AuthContext} from '../UserContext';
import { Redirect } from 'react-router-dom';
import userService from '../../services/user-service';
// import sessionManager from '../../utils/session-manager';

function Logout() {
  // const [isLogged, setIsLogged] = useContext(AuthContext);
  userService.logout()
  // setIsLogged(sessionManager.isLogged())
  return(
    <Redirect to='/login' />
  )
}

export default Logout;