const Todo = require('../models/todoSchema')

module.exports = function(app) {
    app.get('/api/allTodos', function(req, res) {
        Todo.find({}, function(err, result) {
            if(err) throw err;
            res.json(result);
        });
    });

    app.get('/api/todo/:id', function(req, res) {
        Todo.findById(req.params.id, function(err, result){
            if(err) throw err;
            res.json(result);
        })
    });

    app.get('/api/todos/:name', function(req, res) {
        // get all todos of one assigne
        if(Object.keys(req.query).length === 0) {

            Todo.find({"assignedTo": req.params.name}, function(err, result){
                if(err) throw err;
                  res.json(result);
            });
        }
        // get all todos of a assigne based on status
        else {
            Todo.find({"assignedTo": req.params.name}).
            where("status").
            equals(req.query.status).
            exec(function(err, result){
                if (err) throw err;
                res.json(result);
            })
        }
    });
}