const { model, Schema } = require("mongoose");

const song = Schema({
  name: { type: String, required: true },
  duration: { type: String, required: true },
  album_id: { type: String, required: true },
});

module.exports = model("Song", song);
