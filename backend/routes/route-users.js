const router = require('express').Router();
const sequelize = require('../models/index')
const models = require('../models');


//validates a user
//user needs username + password
const validateUser = (req, res) => {
  console.log(req.query)
  User.findOne({
    where: {
      username: req.query.username,
      password: req.query.password
    }
  })
  .then((data) => {
    .then((data) => {
    req.session.userID = data.id;
    req.session.save();
    console.log(req.session);
    res.send(data);
  })
  .catch((err) => {
    res.sendStatus(500)
  })
}
  })




router.route('/user')
  //creates a new user
  .post((req, res) => {
    const data = req.body
    models.User.create({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password
    })
    .then((userInfo) => {
      res.send(userInfo)
    })
    .catch((err) => {
      res.status(500).send('api error')
      console.log('error: ',err)
    })
  })

router.route('/user/:id')
//updates an existing user
  .put((req, res) => {
    const data = req.body
    models.User.update({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.lastname,
      password: data.password
    }, {
      where: {id: req.params.id}
      })
    .then((userInfo) => {
      res.send(userInfo)
    })
    .catch((err) => {
      res.status(500).send('api error')
      console.log('error: ',err)
    })
  })

module.exports = router
