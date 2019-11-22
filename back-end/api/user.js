const router = require('express').Router();
const { User } = require('../models');
const jwt = require('../modules/jwt');

router.post('/register', (req, res, next) => {
  const { username, password } = req.body;
  User.create({ username, password })
    .then((user) => res.send(user))
    .catch(next);
});

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email }).then(user => {
    if (!user) { res.send({ error: '[NOT_FOUND]' }); return; }
    return Promise.all([user, jwt.create({ id: user._id })]);
  }).then(([user, token]) => {
    res.cookie('auth_cookie', token, { httpOnly: true });
    res.send({ user });
  }).catch(next);
});

module.exports = router;