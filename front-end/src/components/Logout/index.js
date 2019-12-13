import React, {useContext} from 'react';
import {AuthContext} from '../Contexts/UserContext';
import { Redirect } from 'react-router-dom';
import userService from '../../services/user-service';

function Logout() {
  const [user, setIsLogged] = useContext(AuthContext);
  userService.logout()
  setIsLogged({isLogged: false, userId: ''});
  console.log(user)
  return(
    <Redirect to='/login' />
  )
}

export default Logout;