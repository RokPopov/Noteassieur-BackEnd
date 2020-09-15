const { Router } = require("express");

const Lecture = require("../models").lecture;
const Note = require("../models").note;

const router = new Router();

router.get("/", async (req, res) => {
  const lectures = await Lecture.findAll({
    include: [Note],
  });
  res.status(200).send(lectures);
});

module.exports = router;
