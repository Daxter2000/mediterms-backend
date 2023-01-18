const { DataTypes, literal } = require("sequelize")


const timestamp = {
    createdAt: {
        type: DataTypes.DATE(3),
        defaultValue: literal("CURRENT_TIMESTAMP(3)"),
    },
    updatedAt: {
        type: DataTypes.DATE(3),
        defaultValue: literal("CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"),
    }
}

module.exports = {timestamp }