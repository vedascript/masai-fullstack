const { model, Schema } = require("mongoose");

const album = Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  year: { type: Number, required: true },
  img_url: { type: String, required: false },
  artist_id: { type: String, required: true },
});

module.exports = model("Album", album);
