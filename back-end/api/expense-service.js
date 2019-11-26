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

router.get('/getByCategory', (req, res, next) => {
  const categories = [];
  
  Promise.all([
    Expense.find({category: 'Bills'}),
    Expense.find({category: 'Rents'}),
    Expense.find({category: 'Entertainment'}),
    Expense.find({category: 'Clothes'}),
    Expense.find({category: 'Pet'}),
    Expense.find({category: 'House'}),
    Expense.find({category: 'Transport'}),
    Expense.find({category: 'Food'}),
    Expense.find({category: 'Toiletry'}),
    Expense.find({category: 'Health'})
  ])
  .then(([bills, rents, entertainment, clothes, pet, house, transport, food, toiletry, health]) => {
    categories.push(bills)
    categories.push(rents)
    categories.push(entertainment)
    categories.push(clothes)
    categories.push(pet)
    categories.push(house)
    categories.push(transport)
    categories.push(food)
    categories.push(toiletry)
    categories.push(health)
    res.send(categories)
  })
})


module.exports = router;