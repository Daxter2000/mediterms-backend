'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class terms_definition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      terms_definition.hasOne(models.term)
      terms_definition.hasOne(models.sample_term)
    }
  }
  terms_definition.init({
    definition: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'terms_definition',
  });
  return terms_definition;
};