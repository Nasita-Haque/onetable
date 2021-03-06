'user strict';

module.exports = function(sequelize, DataTypes){
  var Reservation = sequelize.define("Reservation", {}, {
    classMethods: {
      associate: function(models) {
        Reservation.belongsTo(models.OpenTable)
        Reservation.belongsTo(models.User)
      }
    }
  })
  return Reservation;
}
