const router = require('express').Router();
const sequelize = require('../models/index')
<<<<<<< HEAD
const models = require('../models');
const { User } = models;
=======
const User = require('../models').User;

>>>>>>> 68a7d3345386ec1092b2b22e5b7c402e32ce160e

//validates a user
//user needs username + password

const authenticateUser = (req, res) => {
  console.log("authenticateUser!!", req.query)
  const { username, password} = req.query

  User.findOne({
    where: {
      username,
      password
    }
  })
  .then((data) => {
    if(data){
      req.session.userID = data.id;
      req.session.save();
      console.log(req.session);
      res.send(data);
    } else {
      res.sendStatus(403)
    }
  })
  .catch((err) => {
    res.sendStatus(500)
  })
}

//gets a user
const getUserbyId = (req, res) => {
  console.log("getUserbyId!!!!");
  User.findById(req.params.id)
  .then((data) => {
    res.send(data)
  })
}

//if the user already exist, it will be deredected
const isAuthenticated = (req, res) => {
  console.log(req.session)
  if(req.session.userID){
    User.findById(req.session.userID)
    .then((data) => {
      res.send(data)
    })
  }else {
    res.send(false);
  }
}

//creates a new user

const newUser = (req, res) => {
  const data = req.body
<<<<<<< HEAD
  const { 
    firstname,
    lastname,
    email,
    password
  } = data

  User.create({
    firstname,
    lastname,
    email,
    password
=======
  User.create({
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    password: data.password
>>>>>>> 68a7d3345386ec1092b2b22e5b7c402e32ce160e
  })
  .then((userInfo) => {
    res.send(userInfo)
  })
  .catch((err) => {
    res.status(500).send('api error')
    console.log('error: ',err)
  })
}
//updates user
const updateUser = (req, res) => {
  const data = req.body
  User.update({
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
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
}

///ROUTES
router.route('/validate')
  .get(authenticateUser)
router.route('/validate/userid')
  .get(isAuthenticated)
router.route('/user/:id')
  .get(getUserbyId)
//creates a new user
router.route('/user')
  .post(newUser)
//updates an existing user
router.route('/user/:id')
  .put(updateUser)

module.exports = router
