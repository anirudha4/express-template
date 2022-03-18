// requires
const router = require('express').Router();

router.get('/', (req, res) => res.status(200).json({
    working: true
}));

// app routes
router.use('/users', require('./users'));

// router.use('/admin', require('./admin'));

module.exports = router;