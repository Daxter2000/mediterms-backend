'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isEmail: true,   
        notEmpty: true,
      }
    },
    password: {
      type: DataTypes.STRING,
    },
    last_sign_in: {
      type: DataTypes.DATE,
      validate:{
        isDate: true, 
        isAfter: "2023-01-01",
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};