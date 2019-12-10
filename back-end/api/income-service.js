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

module.exports = router;