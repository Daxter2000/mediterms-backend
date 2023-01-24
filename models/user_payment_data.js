'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_payment_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_payment_data.init({
    subscription_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user_payment_data',
  });
  return user_payment_data;
};