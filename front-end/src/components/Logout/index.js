import React, {useContext, useEffect} from 'react';
import {AuthContext} from '../Contexts/UserContext';
import { Redirect } from 'react-router-dom';
import userService from '../../services/user-service';

function Logout(props) {
  const [user, setUserStatus] = useContext(AuthContext);

  useEffect(()=>{
    userService.logout();
    setUserStatus({isLogged: false, userId: ''});
  })
  return(
    <Redirect to='/login' />
  )
}

export default Logout;