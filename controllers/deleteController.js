const Todo = require('../models/todoSchema');

module.exports = function(app) {
    app.delete('/api/todo/:id', function(req, res) {
        Todo.findByIdAndRemove(req.params.id, function(err, result) {
            if(err) throw err;
            const response = {
                message: "Todo successfully deleted",
                id: result._id
            };
            res.send(response);
        })
    });
}