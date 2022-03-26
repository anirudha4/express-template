// requires
const mongoose = require('mongoose');

// Todo Schema 
const TodoSchema = mongoose.Schema({
     /*
     add attributes for this model

     name: {
         type: String,
         required: true
     },
     */
})
// create model
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo ;