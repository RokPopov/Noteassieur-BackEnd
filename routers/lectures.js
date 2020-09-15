const { Router } = require("express");
const authMiddleware = require("../auth/middleware");

const Lecture = require("../models").lecture;
const Note = require("../models").note;
const Student = require("../models").student;

const router = new Router();

router.get("/", authMiddleware, async (req, res) => {
  const lectures = await Lecture.findAll({
    include: [{ model: Note, include: [Student] }],
  });
  res.status(200).send(lectures);
});

//find all lectures belonging to one student
// find all where lectures.id === student.lectureId
// do I need another relation migration file?
router.get("/mylectures", authMiddleware, async (req, res) => {
  const mylectures = await Lecture.findAll({
    include: [{ model: Note, include: [Student] }, { model: Student }],
    where: {
      studentId: req.user.id,
    },
  });
  res.status(200).send(mylectures);
});

module.exports = router;
