const router = require('express').Router();

const userRouter = require('./user');
const expenseRouter = require('./expense-service');

router.use('/expense', expenseRouter);
router.use('/user', userRouter)

module.exports = router;