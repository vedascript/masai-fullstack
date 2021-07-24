const express = require("express");
const router = express.Router();
const Artist = require("../models/artist");

//register
router.post("/register", async (req, res) => {
  try {
    const artist = await Artist.create(req.body);
    res.status(201).json(artist);
  } catch (err) {
    res.status(404).json({ err });
  }
});

//login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const artist = await Artist.findOne({ email });
  console.log("logged");
  if (artist.password === password) {
    res.status(200).json({ artist, msg: "artist logged in" });
  } else {
    res.status(404).json({ msg: "Wrong Credentials" });
  }
});

module.exports = router;
