const router = require('express').Router();
const { Expense } = require('../models');

router.post('/addExpense', (req, res, next) => {
    const{merchant,price,date,category,text} = req.body;
    Expense.create({merchant,price,date,category,text})
      .then((expense) => {
        res.send(expense)
      })
      .catch(next);
});

router.get('/getExpenses', (req, res, next) => {
  Expense.find()
    .then((expenses) => {
      res.send(expenses);
    })
    .catch(next);
});


module.exports = router;