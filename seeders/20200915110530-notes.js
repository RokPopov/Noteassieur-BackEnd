"use strict";
const models = require("../models");
const Student = models.student;
const Lecture = models.lecture;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const student1 = await Student.findOne({
      where: { email: "ali@ali.com" },
    });

    const student2 = await Student.findOne({
      where: { email: "bart@bart.com" },
    });

    const student3 = await Student.findOne({
      where: { email: "rok@rok.com" },
    });

    const lecture1 = await Lecture.findOne({
      where: { title: "Kelley Sequelize Lecture" },
    });

    const lecture2 = await Lecture.findOne({
      where: { title: "Jeroen Redux Lecture" },
    });

    const lecture3 = await Lecture.findOne({
      where: { title: "David React Lecture" },
    });

    const lecture4 = await Lecture.findOne({
      where: { title: "Rein Express Lecture" },
    });

    const lecture5 = await Lecture.findOne({
      where: { title: "Matias Typescript Lecture" },
    });

    await queryInterface.bulkInsert("notes", [
      {
        time: new Date(),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://sequelize.org/",
        studentId: student1.id,
        lectureId: lecture1.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: new Date(),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://expressjs.com/",
        studentId: student2.id,
        lectureId: lecture2.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: new Date(),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://reactjs.org/",
        studentId: lecture3.id,
        lectureId: lecture3.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: new Date(),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://www.typescriptlang.org/",
        studentId: student1.id,
        lectureId: lecture4.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: new Date(),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://redux.js.org/",
        studentId: student2.id,
        lectureId: lecture5.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: new Date(),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://redux.js.org/",
        studentId: student3.id,
        lectureId: lecture1.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: new Date(),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://redux.js.org/",
        studentId: student1.id,
        lectureId: lecture2.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: new Date(),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://redux.js.org/",
        studentId: student2.id,
        lectureId: lecture3.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: new Date(),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://redux.js.org/",
        studentId: student3.id,
        lectureId: lecture4.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: new Date(),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://redux.js.org/",
        studentId: student1.id,
        lectureId: lecture5.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("notes", null, {});
  },
};
