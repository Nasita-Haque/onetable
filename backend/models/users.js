'user strict';

var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes){
var User = sequelize.define('user', {
  firstname: {
    type: DataTypes.STRING,
    valdate: {
      len: [1, 50]
    }
  },
  lastname: {
    type: DataTypes.STRING,
    valdate: {
      len:[1, 50]
    }
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      len: [1, 100]
    }
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      len: [1, 50]
    }
  }
}, {
  classMethods: {}
}, {
    freezeTableName: true,
    instanceMethods: {
        generateHash: function(password) {
            return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        },
        validPassword: function(password) {
            return bcrypt.compareSync(password, this.password);
    }
})

return User;
}
