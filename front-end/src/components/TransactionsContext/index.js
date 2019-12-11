import React, {useState, createContext} from 'react';

export const TransactionContext = createContext();

export const TransactionProvider = props => {
  const [typeOfTransaction, setType] = useState('');
 
  return(
    <TransactionContext.Provider value={[typeOfTransaction, setType]}>
      {props.children}
    </TransactionContext.Provider>  
  )
}