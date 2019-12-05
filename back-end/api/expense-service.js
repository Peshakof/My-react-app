const router = require('express').Router();
const { Expense, User } = require('../models');

router.post('/addExpense', async(req, res, next) => {
    const{merchant,price,date,category,text,user} = req.body;
    try {
      await Expense.create({merchant,price,date,category,text,user});
      const newExpense = await Expense.findOne({user});
      await User.updateOne({_id: user}, { $push: {expenses: newExpense._id}})  
      res.send('Added new expense!');
    } catch (error) {
      next(error);
    };
});

router.get('/getExpenses', (req, res, next) => {
  Expense.find()
    .then((expenses) => {
      res.send(expenses);
    })
    .catch(next);
});

router.get('/expense-info/:id', (req, res, next) => {
  const id = req.params.id;
  Expense.findById(id)
    .then((expense) => {
      res.send(expense);
    })
    .catch(next);
})

router.delete('/remove/:id', (req, res, next) => {
  const id = req.params.id;
  Expense.findByIdAndRemove(id)
    .then(() => {
      res.send('Expense deleted successfully')
    })
    .catch(next);
})

module.exports = router;