"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("lectures", [
      {
        title: "Kelley Sequelize Lecture",
        time: 93,
        url: "something here",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Jeroen Redux Lecture",
        time: 114,
        url: "something else here",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "David React Lecture",
        time: 93,
        url: "something different here",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Rein Express Lecture",
        time: 225,
        url: "something new here",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Matias Typescript Lecture",
        time: 178,
        url: "something revolutionary here",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("lectures", null, {});
  },
};
