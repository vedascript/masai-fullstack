const express = require("express");
const router = express.Router();
const Album = require("../models/album");

//create album
router.post("/", async (req, res) => {
  try {
    const album = await Album.create(req.body);
    res.status(201).json(album);
  } catch (err) {
    res.status(500).json({ err: "Bad req" });
  }
});

module.exports = router;

//get all Albums
router.get("/", async (req, res) => {
  const page = +req.query.page || 1;
  const size = +req.query.size || 3;

  try {
    const offset = (page - 1) * size;

    const albums = await Album.find().skip(offset).limit(size);

    const count = await Album.find().countDocuments();

    const totalPages = Math.ceil(count / size);

    res.status(200).json({ albums, totalPages });
  } catch (err) {
    res.status(500).json({ err: "Bad req" });
  }
});

//get album by name
router.get("/search", async (req, res) => {
  const name = req.query.name;

  try {
    const album = await Album.findOne({ name });

    res.status(200).json(album);
  } catch (err) {
    res.status(500).json({ err: "Bad req" });
  }
});

//filter by genre
router.get("/genre", async (req, res) => {
  const genre = req.query.genre;
  try {
    const albums = await Album.find({ genre });

    res.status(200).json(albums);
  } catch (err) {
    res.status(500).json({ err: "Bad req" });
  }
});

//sort by year
router.get("/asc", async (req, res) => {
  const albums = await Album.find().sort({ year: 1 }).exec();
  res.status(200).json(albums);
});

router.get("/desc", async (req, res) => {
  const albums = await Album.find().sort({ year: -1 }).exec();
  res.status(200).json(albums);
});
