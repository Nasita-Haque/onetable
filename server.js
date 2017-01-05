const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const path = require('path');
const db = require('./backend/models');

const indexRouter = require('./backend/routes/index').routes



app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

// app.use('/api', require('./routers'));

app.use('/api', indexRouter.Restaurant);
app.use('/api', indexRouter.User)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/frontend/index.html'))
})

db.sequelize.sync().then(() => {
  console.log("server running in 6789")
  app.listen(6789)
})
