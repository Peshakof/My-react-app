import React,{useContext, useEffect, useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthContext} from '../Contexts/UserContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user] = useContext(AuthContext);
  
  return (
    <Route
      {...rest}
      render={props => 
        user.isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  )
}

export default ProtectedRoute;