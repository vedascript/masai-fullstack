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

//get songs and  count of songs of an album
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const count = await Song.find({ album_id: id }).countDocuments();
  const songs = await Song.find({ album_id: id });

  res.status(200).json({ numOfSongs: count, songs });
});

module.exports = router;
