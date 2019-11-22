import React from 'react';
import Navigation from './components/Navigation';
import Features from './components/Features';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Registration';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import AddExpense from './components/Expense';
import AddIncome from './components/Income';
import { ToastContainer } from 'react-toastify';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './Home.css';

function Home() {
  return (
    <Router>
    <div className="Home">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Features} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add-expense" component={AddExpense} />
        <Route path="/add-income" component={AddIncome} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
    <ToastContainer
          position="top-center"
          autoClose={5000}
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
