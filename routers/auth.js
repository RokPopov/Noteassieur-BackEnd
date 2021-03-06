const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const Student = require("../models/student");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const student = await Student.findOne({ where: { email } });

    if (!student || !bcrypt.compareSync(password, student.password)) {
      return res.status(400).send({
        message: "Student with that email not found or password incorrect",
      });
    }

    delete student.dataValues["password"];
    const token = toJWT({ studentId: student.id });
    return res.status(200).send({ token, ...student.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  delete req.student.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

module.exports = router;
