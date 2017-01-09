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
    req.session.userID = data.id;
    req.session.save();
    console.log(req.session);
    res.send(data);
  })
  .catch((err) => {
    res.sendStatus(500)
  })
}

//gets a user
const getUserbyId = (req, res) => {
  User.findById(req.params.id)
  .then((data) => {
    res.send(data)
  })
}

//if the user already exist, it will be deredect
const validateExistng = (req, res) => {
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
}
//updates user
const updateUser = (req, res) => {
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
}

///ROUTES
router.route('/validate')
  .get(validateUser)

router.route('/validate/userid')
  .get(validateExistng)
route.route('/user/:id')
  .get(getUserbyId)

//creates a new user
router.route('/user')

router.route('/user')
  //creates a new user
  .post(newUser)


router.route('/user/:id')
//updates an existing user
  .put(updateUser)

module.exports = router
