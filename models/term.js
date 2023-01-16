'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class term extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  term.init({
    term: DataTypes.STRING,
    definition: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'term',
  });
  return term;
};