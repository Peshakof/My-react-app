const router = require('express').Router();
const { User } = require('../models');
const jwt = require('../modules/jwt');
const config = require('../config/config')

router.post('/register', (req, res, next) => {
  const { username, password } = req.body;
  User.create({ username, password })
    .then((user) => res.send(user))
    .catch(next);
});

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;
      User.findOne({ username })
        .then((user) => { 
          if(!user){
            res.status(404);
            return;
          }
          return Promise.all([user, user.matchPassword(password)])
        })
        .then(([user, match]) => {
          if (!match) {
            res.status(401).send('Invalid password');
            return;
          }

          const token = jwt.create({ id: user._id });
          res.cookie(config.authCookieName, token).send(user);
        })
        .catch(next);
});    


module.exports = router;