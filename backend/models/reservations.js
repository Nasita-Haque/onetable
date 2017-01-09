'user strict';

module.exports = function(sequelize, DataTypes){
  var Reservation = sequelize.define("Reservation", {}, {
    classMethods: {
      associate: function(models) {
        Reservation.belongsTo(models.Restaurant)
        Reservation.belongsTo(models.User)
      }
    }
  })
  return Reservation;
}
