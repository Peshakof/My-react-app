const router = require('express').Router();

const userRouter = require('./user');
const expenseRouter = require('./expense-service');
const incomeRouter = require('./income-service');

router.use('/expense', expenseRouter);
router.use('/user', userRouter)
router.use('/income', incomeRouter);

module.exports = router;