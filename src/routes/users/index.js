const { getUsers } = require('controllers/users');

 
// requires
const router = require('express').Router();

// routes

router.get('/', getUsers)

module.exports = router;