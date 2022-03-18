const { getRandomNumber } = require('controllers/random');

// requires
const router = require('express').Router();

// routes
router.get('/', getRandomNumber)

module.exports = router;