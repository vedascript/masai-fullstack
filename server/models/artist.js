const { model, Schema } = require("mongoose");

const artist = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = model("Artist", artist);
