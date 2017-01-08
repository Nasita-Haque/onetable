'user strict';

module.exports = function(sequelize, DataTypes){
  var Reservation = sequelize.define("Reservation", {
    opentableID:{
      type: DataTypes.INTEGER,
      required:true
   },
    userID: {
      type: DataTypes.INTEGER, 
      required: true
    }
  })
  return Reservation;
}
