import React, {useState, createContext} from 'react';
// import sessionManager from '../../utils/session-manager';

export const AuthContext = createContext();

export const AuthProvider = props => {
  const [user, setUserStatus] = useState( {isLogged: false, userId: ''} );
 
  return(
    <AuthContext.Provider value={[user, setUserStatus]}>
      {props.children}
    </AuthContext.Provider>  
  )
}