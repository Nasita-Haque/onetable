"use strict";

module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", {
    name: DataTypes.TEXT,
    address: DataTypes.TEXT,
    state: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL,
    city: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    price: DataTypes.STRING,
    cuisine: DataTypes.STRING,
    img_url: DataTypes.STRING,
    website_url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Restaurant.hasMany(models.OpenTable)
      }
    }
  });
  return Restaurant;
};
