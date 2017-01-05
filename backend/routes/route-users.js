const express  = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('bodyParser');
const User = require('../models');

app.use(bodyParser.urlencoded({extended: true}))

router.route('/api/users')
  .get((req, res) => {
    User.findAll()
    .then((users) => {
      res.send(users)
    })
  })
  .post((req, res) => {
    const data = req.body
    User.create({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.lastname,
      password: data.password
    })
    .then(
      res.send('user was created')
    )
  })
router.route('/api/user/:id')
  .put((req, res) => {
    const data = req.body
    User.update({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.lastname,
      password: data.password
    }, {
      where: {
        id: req.params.id
      }
      .then(
        res.send('user updated')
      )
    })
  })
