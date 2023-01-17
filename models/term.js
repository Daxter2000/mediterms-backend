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
       term.belongsTo(models.topic)
       term.belongsTo(models.terms_definition)
    }
  }
  term.init({
    term: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'term',
  });
  return term;
};