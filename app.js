const Express = require('express');
const db = require('mongoose');
const bodyParser = require('body-parser');
const writeController = require('./controllers/writeController');
const readController = require('./controllers/readController');
const updateController = require('./controllers/updateController');
const deleteController = require('./controller/');


const app = Express();
const port = process.env.PORT || 3000;

db.connect("localhost");
const conn = db.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
});
conn.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

//write apis
writeController(app);

//read apis
readController(app);

//update apis
updateController(app);

//delete apis
deleteController(app);


app.listen(port,() => {
    console.log('server started.....');
});