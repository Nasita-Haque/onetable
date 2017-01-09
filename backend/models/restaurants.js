"use strict";

module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", {
    name: DataTypes.TEXT,
    address: DataTypes.TEXT,
    state: DataTypes.STRING,
    lat: DataTypes.BIGINT,
    lng: DataTypes.BIGINT,
    city: DataTypes.STRING,
    zipcode: {type: DataTypes.INTEGER, validate: {len: [1, 99999]}},
    price: DataTypes.STRING,
    phone_number: {type: DataTypes.BIGINT, validate: {len: [1, 9999999999]}},
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
