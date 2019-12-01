import React from 'react';
import { Redirect } from 'react-router-dom';
import userService from '../../services/user-service';

function Logout() {
  userService.logout()
  return(
    <Redirect to='/' />
  )
}

export default Logout;