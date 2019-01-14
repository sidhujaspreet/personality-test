// require('dotenv').config();

var express = require('express'),
  app = express(),
  port = process.env.PORT || 2000,
  db_conn = process.env.DB_CONN || 'mongodb://jsidhu:jarvis963@ds255754.mlab.com:55754/personalitytest',
  mongoose = require('mongoose'),
  Task = require('./src/models/model'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

function createServer() {
 	try {
   		//mongoose.connect('mongodb://localhost:27017/todo');
	    mongoose.connect(db_conn);
	    
	    var sm = require('./src/middleware/serverMiddleware');
	    
	    app.use(sm.customHeaders);
	    app.use(bodyParser.urlencoded({ extended: true }));
	    app.use(bodyParser.json());
	    
	    var routes = require('./src/routes/routes');
	    routes(app);

	    app.listen(port);

	    console.log('RESTful API server started on: ' + port);
	}
	catch(e){
	    console.log(e);
	}
};

exports.createServer = createServer;
