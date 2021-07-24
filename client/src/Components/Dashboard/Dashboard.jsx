import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export const Dashboard = () => {
  const id = useParams().id;
  const [artist, setArtist] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/artist/" + id)
      .then((res) => setArtist(res.data));

    axios
      .get("http://localhost:5000/album/artist/" + id)
      .then((res) => setAlbums(res.data));
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            {artist?.name}
          </Typography>
          <div style={{ marginLeft: "auto" }}>
            <Link
              to={`/albumform/${id}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography variant="h6">Add New Album</Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      <Container style={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="h3" gutterBottom>
          Discography of {artist?.name}
        </Typography>

        <Grid container justify="space-around">
          {albums?.map((el) => (
            <Grid item lg={5} className="animate">
              <Paper elevate>
                <Link
                  to={`/songform/${el._id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Typography variant="h4">{el.name}</Typography>
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
