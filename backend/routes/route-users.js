const router = require('express').Router();
const sequelize = require('../models/index')
const models = require('../models');


router.route('/users')
  .get((req, res) => {
    models.User.findAll()
    .then((users) => {
      res.send(users)
    })
    .catch((err) => {
      res.status(500).send('api error')
      console.log('error: ',err)
    })
  })
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
