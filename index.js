'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
let db; 

if (process.env.NODE_ENV === "test") {
	db = mongoose.connect(config.test_db);
	app.listen(config.test_port, (err) => {
	  if(err) throw err;
	  console.log("App listening on port " + config.test_port);
	});
} else {
 	db = mongoose.connect(config.db);
  app.listen(config.port, (err) => {
	  if(err) throw err;
	  console.log("App listening on port " + config.port);
	});
}

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + config.db);
});