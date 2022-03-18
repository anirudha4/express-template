const { getUsers } = require('controllers/users');

 
// requires
const router = require('express').Router();

// routes

router.get('/', getUsers)
// router.post('/signup', signupController)
// router.post('/login', loginController)
// router.put('/update/:id', updateUser)
// router.get('/verify-user', verifyToken)

module.exports = router;