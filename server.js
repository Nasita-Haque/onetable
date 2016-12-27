const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./back/db');
const environmentVariables = require('./back/env');

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/front/bundle')));

//return our react app for all non-API routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/index.html'));
});

sequelizeConnection
.authenticate()
.then(() => {
  //this if statement will prevent our express server and test server (using supertest) from trying to access the same port at the same time
  if (!module.parent) {
     app.listen(environmentVariables.PORT, () => console.log('Listening on port ' + environmentVariables.PORT));
  };
})
.catch((err) => console.log('Unable to connect to the database:', err));
