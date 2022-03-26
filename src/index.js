// env setup
require('dotenv').config();

// setup aliases
const moduleAlias = require('module-alias')
moduleAlias.addAliases({
  'root'  : `${__dirname}/src`,
  'controllers': `${__dirname}/controllers`,
  'models': `${__dirname}/models`,
  'utils': `${__dirname}/utils`,
  'routes': `${__dirname}/routes`,
  'generators': `${__dirname}/generators`,
});

// core nodejs modules
const http = require('http');

// requires
// const mongoose = require('mongoose');

// require app
const app = require('./app');

// get the http server up and running
const server = http.createServer(app);

// mongoose setup
// mongoose.connect(process.env.DB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
// .then(_ => console.log("connected to mongoDB"))
// .catch(error => console.log(error.message));



// listen to request
server.listen(process.env.PORT || 8000, () => console.log(`Server up and running. \nVisit http://localhost:${process.env.PORT || 8000}/api`)); 