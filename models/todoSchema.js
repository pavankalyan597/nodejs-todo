const db = require('mongoose');

const Schema = db.Schema;
const todoSchema = new Schema({
    "assignedTo": String,
    "todo": String,
    "status":  { type: String, default: 'todo' },
});

const Todo = db.model('todo', todoSchema);

module.exports = Todo;