import React, {useState, createContext} from 'react';

export const AuthContext = createContext();

export const AuthProvider = props => {
  const [isLogged, setUserStatus] = useState( false );
 
  return(
    <AuthContext.Provider value={[isLogged, setUserStatus]}>
      {props.children}
    </AuthContext.Provider>  
  )
}