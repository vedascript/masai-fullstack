import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Paper, Container } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";

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
      <Container style={{ marginTop: "20px", textAlign: "center" }}>
        <h2>Track List</h2>

        <Grid container direction="row" alignItems="center" justify="center">
          {songs.length !== 0 && (
            <Grid item lg={5}>
              <Paper elevate>
                {songs.map((el, ind) => (
                  <div key={el.name}>
                    <p>
                      <span>{ind + 1}</span> <strong>{el.name}</strong>{" "}
                      {el.duration}{" "}
                    </p>
                  </div>
                ))}
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
};
