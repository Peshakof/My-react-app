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

router.put('/remove/:id', async(req, res, next) => {
  const id = req.params.id;
  const {userId} = req.body;
  try {
    await Expense.findByIdAndRemove(id)
    await User.updateOne({_id: userId}, {$pull:{expenses: id}})
    res.send('Expense deleted successfully')
  } catch (error) {
    next(error)
  }
})

router.put('/update/:id', (req, res, next) => {
  const id = req.params.id;
  const expense = req.body;
  Expense.updateOne({_id: id}, expense)
    .then(() => {
      res.send('Expense updated.')
    })
    .catch(next);
})

module.exports = router;