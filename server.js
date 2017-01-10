'use strict'
const express = require("express");
const app = express();
const session = require('express-session');
const bodyparser = require("body-parser");
const path = require('path');
const db = require('./backend/models');
const indexRouter = require('./backend/routes/index').routes

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static(path.join(__dirname,'./frontend/public')))
app.use(express.static(path.join(__dirname,'./frontend/styling')))


//app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'serete key',//interal use to make use is secured
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))


//BACKEND ROUTES
app.use('/api', indexRouter.Restaurant);
app.use('/api', indexRouter.User);
app.use('/api', indexRouter.OpenTable)
app.use('/api', indexRouter.Reservation)

//FRONTEND ROUTES
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/frontend/index.html'))
})

//SERVER CONNECTION
db.sequelize.sync().then(() => {
  console.log("server running in 6789")
  app.listen(6789)
})

//EXPORT FOR TESTING
module.exports = app;
