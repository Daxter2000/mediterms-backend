'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class total_answers_by_topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  total_answers_by_topic.init({
    answerSummary: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'total_answers_by_topic',
  });
  return total_answers_by_topic;
};