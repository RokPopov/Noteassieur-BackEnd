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
      lecture.hasMany(models.note);
    }
  }
  lecture.init(
    {
      title: {
        type: DataTypes.STRING,
      },
      time: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "lecture",
    }
  );
  return lecture;
};
