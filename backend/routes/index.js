
const User = require('./route-users');
const OpenTable = require('./route-opentables');
const Restaurant = require('./route-restaurants');

module.exports = {
  routes: {
    User,
    OpenTable,
    Restaurant
  }
}
