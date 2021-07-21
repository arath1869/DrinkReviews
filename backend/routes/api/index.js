const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const drinksRouter = require('./drink.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/drinks',drinksRouter);

module.exports = router;