'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_payment_datum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_payment_datum.belongsTo(models.User, {
        foreignKey:{
          fieldname: "userId",
          allowNull: true,
          require: true
          
        },
        targetKey: "id"
      })
    }
  }
  User_payment_datum.init({
    userId: {
        type: DataTypes.UUID,
        references: { 
          model: 'User',
          key: 'id'
        }
    },
    expiration_time: {
      type: DataTypes.INTEGER,

    },
    subscription_date: {
      type: DataTypes.DATE
    },
    payment_status: {
      type: Sequelize.ENUM("pending", "paid", "cancelled"),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'User_payment_datum',
  });
  return User_payment_datum;
};