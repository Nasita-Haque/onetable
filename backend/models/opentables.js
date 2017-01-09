'user strict';

module.exports = function(sequelize, DataTypes){
  var OpenTable = sequelize.define("OpenTable", {
    date:{
     type: DataTypes.DATEONLY,
     validate: {
      isDate:true,
      require:true,
      notNull:true
     }
   },
    time: {
      type:DataTypes.TIME,
      validate:{
       require:true,
       notNull:true
      }
    },
    availability: {type: DataTypes.BOOLEAN, defaultValue: true}
  }, {
    classMethods: {
      associate: function(models) {
        OpenTable.belongsTo(models.Restaurant)
        OpenTable.hasMany(models.Reservation)
      }
    }
  })
  return OpenTable;
}
