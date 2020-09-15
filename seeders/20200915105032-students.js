"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("students", [
      {
        username: "5click Ali",
        email: "ali@ali.com",
        password: bcrypt.hashSync("ali", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Bartan89",
        email: "bart@bart.com",
        password: bcrypt.hashSync("bart", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Popce",
        email: "rok@rok.com",
        password: bcrypt.hashSync("rok", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("students", null, {});
  },
};
