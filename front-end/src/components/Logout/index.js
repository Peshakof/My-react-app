import React, {useContext} from 'react';
import {AuthContext} from '../UserContext';
import { Redirect } from 'react-router-dom';
import userService from '../../services/user-service';

function Logout() {
  const [isLogged, setIsLogged] = useContext(AuthContext);
  userService.logout()
  setIsLogged(false);
  console.log(isLogged)
  return(
    <Redirect to='/login' />
  )
}

export default Logout;