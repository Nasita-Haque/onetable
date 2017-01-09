"use strict";

module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", {
    name: DataTypes.TEXT,
    address: DataTypes.TEXT,
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
        Restaurant.hasMany(models.OpenTable)
        Restaurant.hasMany(models.Reservation)
      }
    }
  });
  return Restaurant;
};
