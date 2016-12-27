const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/front/bundle')));

//return our react app for all non-API routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/index.html'));
});

app.listen('5678', () => console.log('Listening on port 5678'));
