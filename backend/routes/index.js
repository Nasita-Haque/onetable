const User = require('./route-users');
const Reservation = require('./route-reservations');
const Restaurant = require('./route-restaurants');

module.exports = {
  routes: {
    User,
    Reservation,
    Restaurant
  }
}
