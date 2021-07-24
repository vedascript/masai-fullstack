import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./albumForm.css";

export const AlbumForm = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState(0);

  const artistId = useParams().id;

  const handleAdd = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/album", {
        name,
        genre,
        year: Number(year),
        artist_id: artistId,
      })
      .then((res) => alert("album added"));
  };

  return (
    <div class="wrapper">
      <h1>Add New Album</h1>

      {/* <!--form container--> */}
      <div class="form-container">
        <form>
          {/* <!--flexbox and it's items--> */}
          <div class="flex">
            <div class="flex-item">
              {/* <!--full name field--> */}
              <div class="field-container">
                <label for="full-name">
                  Name: <span class="required">*</span>
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  placeholder="Album name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span class="error-messg"></span>
              </div>

              {/* <!--email field--> */}
              <div class="field-container">
                <label for="email">
                  Genre <span class="required">*</span>
                </label>
                <input
                  name="email"
                  placeholder="Genre"
                  required="required"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
                <span class="error-messg"></span>
              </div>
            </div>
            <div class="flex-item">
              {/* <!--contact no field--> */}
              <div class="field-container">
                <label for="contact-no">Img Url</label>
                <input name="contact-no" id="contact-no" />
                <span class="error-messg"></span>
              </div>

              {/* <!--password field--> */}
              <div class="field-container">
                <label for="passkey">
                  Year: <span class="required">*</span>
                </label>
                <div class="passkey-box">
                  <input
                    name="passkey"
                    id="passkey"
                    class="passkey"
                    type="number"
                    placeholder="Year"
                    required="required"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                  <span class="passkey-icon" data-display-passkey="off">
                    <i class="fas fa-eye"></i>{" "}
                  </span>
                </div>
                <span class="error-messg"></span>
              </div>
            </div>
          </div>

          <div class="center">
            <button type="submit" onClick={handleAdd}>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
