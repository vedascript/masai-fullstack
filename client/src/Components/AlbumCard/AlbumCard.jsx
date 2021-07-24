import React, { useEffect, useState } from "react";
import axios from "axios";

export const AlbumCard = ({ album }) => {
  const [artist, setArtist] = useState("");
  const [numOfSongs, setNumOfSongs] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/artist/" + album.artist_id)
      .then((res) => setArtist(res.data.name));

    axios
      .get("http://localhost:5000/song/" + album._id)
      .then((res) => setNumOfSongs(res.data.numOfSongs));
  }, []);

  return (
    <div>
      <h3>Album: {album.name}</h3>
      <h4>Artist: {artist}</h4>
      <h5>Songs: {numOfSongs}</h5>
    </div>
  );
};
