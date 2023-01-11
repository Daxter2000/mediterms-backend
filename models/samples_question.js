'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Samples_question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Samples_question.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Samples_question',
  });
  return Samples_question;
};