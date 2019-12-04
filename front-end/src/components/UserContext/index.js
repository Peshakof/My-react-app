import React, {useState, createContext} from 'react';
// import sessionManager from '../../utils/session-manager';

export const AuthContext = createContext();

export const AuthProvider = props => {
  const [isLogged, setUserStatus] = useState( false );
 
  return(
    <AuthContext.Provider value={[isLogged, setUserStatus]}>
      {props.children}
    </AuthContext.Provider>  
  )
}