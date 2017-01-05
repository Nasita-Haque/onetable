'user strict';

module.exports = function(sequelize, DataTypes){
  var OpenTable = sequelize.define("OpenTable", {
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    availability: {type: DataTypes.BOOLEAN, defaultValue: true}
  }, {
    classMethods: {
      associate: function(models) {
        OpenTable.belongsTo(models.Restaurant)
        OpenTable.belongsToMany(models.User, {
          through: "Reservations"
        })
      }
    }
  })
  return OpenTable;
}
