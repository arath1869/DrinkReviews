const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const drinksRouter = require('./drink.js')
const reviewsRouter = require('./review.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/drinks',drinksRouter);

router.use('/reviews', reviewsRouter)

module.exports = router;