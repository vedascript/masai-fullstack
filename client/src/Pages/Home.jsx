import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { AlbumCard } from "../Components/AlbumCard/AlbumCard";
import { Filters } from "../Components/Filters/Filters";

export const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const arr = new Array(totalPages).fill(1);

  useEffect(() => {
    axios.get("http://localhost:5000/album").then((res) => {
      setAlbums(res.data.albums);
      setTotalPages(Number(res.data.totalPages));
    });
  }, []);

  const handlePaginatedRequest = () => {};

  return (
    <div>
      <Navbar />
      <Filters />

      {albums.length !== 0 && (
        <>
          {albums.map((el) => (
            <Link
              key={el}
              to={`/songs/${el._id}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <AlbumCard key={el} album={el} />
            </Link>
          ))}
        </>
      )}

      {albums.length !== 0 && (
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
    </div>
  );
};
