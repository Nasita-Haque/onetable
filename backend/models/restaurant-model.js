"use strict";

module.exports = function(sequelize, DataTypes) {
  var restaurant = sequelize.define("Restaurant", {
    name: DataTypes.TEXT,
    address: DataTypes.Text,
    state: DataTypes.STRING,
    lat: DataTypes.INTEGER,
    lng: DataTypes.INTEGER,
    city: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    price: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    cuisine: DataTypes.STRING,
    img_url: DataTypes.STRING,
    website_url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Restaraunt.hasMany(models.Reservation)
      }
    }
  });
  return Restaurant;
};