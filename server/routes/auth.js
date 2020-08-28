const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const router = express.Router();

const auth = require("../middleware/auth");
const User = require("../models/User");

// get logged  in users
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//auth users & get token
router.post(
  "/",
  [
    check("email", "confirm your email").isEmail(),
    check("password", "password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ msg: "user not found" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(404).json({ msg: "invalid password" });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(payload, "secret", { expiresIn: 36000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
