
const User = require('./route-users');
const OpenTable = require('./route-opentables');
const Restaurant = require('./route-restaurants');
const Reservation = require('./route-reservations');

module.exports = {
  routes: {
    User,
    OpenTable,
    Restaurant,
    Reservation
  }
}
