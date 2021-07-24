const express = require("express");
const router = express.Router();
const Song = require("../models/song");

//create song
router.post("/", async (req, res) => {
  try {
    const song = await Song.create(req.body);
    res.status(201).json(song);
  } catch (err) {
    res.status(500).json({ err: "Bad req" });
  }
});

module.exports = router;
