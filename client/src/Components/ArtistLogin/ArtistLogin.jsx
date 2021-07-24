import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { Redirect } from "react-router-dom";

export const ArtistLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [artist, setArtist] = useState("");

  const handLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/artist/login", { email, password })
      .then((res) => setArtist(res.data.artist._id));
  };

  if (artist !== "") {
    return <Redirect to={`/artist/${artist}`} push />;
  }

  return (
    <div class="login-page">
      <div class="form">
        <form class="login-form">
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={(e) => handLogin(e)}>
            login
          </button>
          <p class="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};
