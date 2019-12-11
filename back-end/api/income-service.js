const router = require('express').Router();
const { User, Income } = require('../models');

router.post('/addIncome', async(req, res, next) => {
  const{price,date,category,text,user} = req.body;
  try {
    await Income.create({price,date,category,text,user});
    const newIncome = await Income.findOne({user});
    await User.updateOne({_id: user}, { $push: {incomes: newIncome._id}})  
    res.send('Added new income!');
  } catch (error) {
    next(error);
  };
})

router.get('/getAll/:id', (req, res, next) => {
  const userId = req.params.id;
  Income.find({user: userId})
    .then((incomes) => {
      res.send(incomes);
    })
    .catch(next);
})

router.get('/getCurrentIncome/:id', (req, res, next) => {
  const id = req.params.id;
  Income.findById(id)
    .then((income)=>{
      res.send(income);
    })
    .catch(next);
})

router.put('/remove/:id', async(req, res, next) => {
  const id = req.params.id;
  const {userId} = req.body;
  try {
    await Income.findByIdAndRemove(id)
    await User.updateOne({_id: userId}, {$pull:{incomes: id}})
    res.send('Income deleted successfully')
  } catch (error) {
    next(error)
  }
})

module.exports = router;