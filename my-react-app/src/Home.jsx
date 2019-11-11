import React from 'react';
import Navigation from './Navigation/Navigation';
import Features from './Features/Features';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Register from './Registration/Register';
import Chart from './Horizontal-chart/Chart';
import AddExpense from './Expense/Add-expense';
import AddIncome from './Income/Add-income';

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
        <Route path="/dashboard" component={Chart} />
      </Switch>
      <Route path="/add-expense" component={AddExpense} />
      <Route path="/add-income" component={AddIncome} />
      <Footer />
    </div>
    </Router>
  );
}

export default Home;
