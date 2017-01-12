const router = require('express').Router();
const sequelize = require('../models/index')
const models = require('../models');
const { User } = models;

//validates a user
//user needs email + password

const authenticateUser = (req, res) => {
  console.log("authenticateUser!!", req.body)
  console.log("authenticateUser!!", req.query);
  const { email, password} = req.query

  User.findOne({
    where: {
      email,
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

//gets a user by id
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
