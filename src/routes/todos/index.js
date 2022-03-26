const { getTodos, createTodo, updateTodo, deleteTodo  } = require('controllers/todo');
 
// requires
const router = require('express').Router();

// routes

router.get('/', getTodos)
router.post('/', createTodo)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo) 

module.exports = router;