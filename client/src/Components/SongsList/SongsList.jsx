import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const SongsList = () => {
  const id = useParams().id;
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/song/" + id)
      .then((res) => setSongs(res.data.songs));
  }, []);

  return (
    <div>
      <h2>Track List</h2>

      {songs.length !== 0 && (
        <>
          {songs.map((el, ind) => (
            <>
              <div>
                <p>
                  <span>{ind + 1}</span> <strong>{el.name}</strong>{" "}
                  {el.duration}{" "}
                </p>
              </div>
            </>
          ))}
        </>
      )}
    </div>
  );
};
