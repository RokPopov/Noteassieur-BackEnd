"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class lecture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lecture.init(
    {
      title: {
        type: DataTypes.STRING,
      },
      time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      url: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "lecture",
    }
  );
  return lecture;
};
