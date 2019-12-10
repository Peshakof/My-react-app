const router = require('express').Router();
const { Expense, User, Income } = require('../models');

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

router.get('/getExpenses/:id', (req, res, next) => {
  const userId = req.params.id;
  Expense.find({user: userId})
    .then((expenses) => {
      res.send(expenses);
    })
    .catch(next);
});

router.get('/getTotalExpensesAndIncome', async(req, res, next) => {
  try {
    const expensesTotal = await Expense.find().select('price');
    const incomeTotal = await Income.find().select('price');
    res.send({expensesTotal, incomeTotal})
  } catch (error) {
    next(error);
  }; 
})

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