const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const artistController = require("./controllers/artist");
const albumController = require("./controllers/album");
const songController = require("./controllers/song");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

app.use("/artist", artistController);
app.use("/album", albumController);
app.use("/song", songController);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.connect(uri, options);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established successfully");
  app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
  });
});
