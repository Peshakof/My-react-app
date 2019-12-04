import React from 'react';
import Navigation from './components/Navigation';
import Features from './components/Features';
import Footer from './components/Footer';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Registration';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import AddExpense from './components/NewExpense';
import AddIncome from './components/Income';
import ExpensePage from './components/ExpensePage';

import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from './components/UserContext';

import './Home.css';

function Home() {
  
  return (
    <Router>
      <AuthProvider >
        <div className="Home">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Features} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/add-expense" exact component={AddExpense} />
            <Route path="/add-income" exact component={AddIncome} />
            <Route path="/expense-info/:id" exact component={ExpensePage} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </AuthProvider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
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
