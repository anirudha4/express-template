// requires
const router = require('express').Router();

router.get('/', (req, res) => res.status(200).json({
    working: true
}));

// user routes
router.use('/users', require('./users'));

// get random number application
router.use('/random', require('./random'))
router.use('/todos', require('./todos'));

module.exports = router;