const Todo = require('../models/todoSchema');

module.exports = function(app) {
    //request body contain list of todos as value to todos key
    app.post('/api/createMultipleTodos', function(req, res){
        Todo.insertMany(req.body.todos)
        .then(function(response) {
            res.redirect('/api/allTodos')
        })
        .catch(function(err) {
            throw err;
        })
    });
    app.post('/api/createTodo', function(req, res) {
        const response = new Todo(req.body);
        response.save(function(err, data){
            if(err) {
                throw err;
            }
            else {
                //returns all todos of the assigne
                res.redirect(`/api/todos/${data.assignedTo}`)
            }
        })
    });
}