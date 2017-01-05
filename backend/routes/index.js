const User = require('./route-users');
const Reservation = reuire('./route-reservations');
const Restaurant = require('./route-restaurant');

module.exports = function(req, res) {
  routes: {
    User,
    Reservation,
    Restaurant
  }
}
