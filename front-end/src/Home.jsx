import React, {useEffect, useState, useContext} from 'react';
import Navigation from './components/Navigation';
import Features from './components/Features';
import Footer from './components/Footer';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Registration';
// import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import AddExpense from './components/NewExpense';
import AddIncome from './components/Income';
import InfoPage from './components/InfoPage';
import PrivateRoute from './components/ProtectedRoute/protectedRoute.jsx';
import UserProfile from './components/UserProfilePage';

import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider, AuthContext } from './components/Contexts/UserContext';
import { TransactionProvider } from './components/Contexts/TransactionsContext';

import './Home.css';

function Home() {

  return (
    <Router>
      <AuthProvider >
        {/* <div className="Home"> */}
          <Navigation />
          <Switch>
            <Route path="/" exact component={Features} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/logout" exact component={Logout} />
            <PrivateRoute path="/user-profile" exact component={UserProfile} />
            <PrivateRoute path="/add-expense" exact component={AddExpense} />
            <PrivateRoute path="/add-income" exact component={AddIncome} />
            <TransactionProvider>
              <PrivateRoute path="/expense-info/:id" exact component={InfoPage} />
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
              <PrivateRoute path="/income-info/:id" exact component={InfoPage} />
            </TransactionProvider>
            <Route path="*" render={(<h1>not found</h1>)} />
          </Switch>
          <Footer />
        {/* </div> */}
      </AuthProvider>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default Home;