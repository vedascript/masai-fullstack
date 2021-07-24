import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Grid, Paper, Container } from "@material-ui/core";
import { AlbumCard } from "../Components/AlbumCard/AlbumCard";
import { Filters } from "../Components/Filters/Filters";

export const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const arr = new Array(totalPages).fill(1);

  useEffect(() => {
    axios.get("http://localhost:5000/album").then((res) => {
      setAlbums(res.data.albums);
      setTotalPages(Number(res.data.totalPages));
    });
  }, []);

  const handlePaginatedRequest = (pageNum) => {
    setPage(pageNum);
    axios
      .get("http://localhost:5000/album", {
        params: {
          page: pageNum,
          size: 3,
        },
      })
      .then((res) => {
        setAlbums(res.data.albums);
        setTotalPages(Number(res.data.totalPages));
      });
  };

  return (
    <div>
      <Navbar />

      <Container style={{ marginTop: "20px", textAlign: "center" }}>
        <Filters setAlbums={setAlbums} />
        <br />

        <Grid container justify="space-between">
          {albums?.length !== 0 && (
            <>
              {albums?.map((el) => (
                <Grid lg={5}>
                  <Paper elevate>
                    <Link
                      key={el._id}
                      to={`/songs/${el._id}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <AlbumCard key={el} album={el} />
                    </Link>
                  </Paper>
                </Grid>
              ))}
            </>
          )}
        </Grid>
        {albums?.length !== 0 && (
          <>
            {arr.map((el, ind) => (
              <button
                key={ind}
                onClick={() => handlePaginatedRequest(ind + 1)}
                disabled={page === ind + 1}
              >
                {ind + 1}
              </button>
            ))}
          </>
        )}
      </Container>
    </div>
  );
};
