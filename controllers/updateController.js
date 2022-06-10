const Todo = require("../models/todoSchema");

module.exports = function(app) {
    // update any field in todo and return updated value
    app.put('/api/updateTodo/:id', function(req, res) {
        Todo.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, result) {
            if (err) throw err;
            res.json(result);
        })
    });
}