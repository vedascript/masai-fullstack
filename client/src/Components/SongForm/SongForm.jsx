import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./songForm.css";

export const SongForm = () => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const album_id = useParams().id;

  const handleAdd = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/song", {
        name,
        duration,
        album_id,
      })
      .then((res) => alert("song added"));
  };

  return (
    <div class="wrapper">
      <h1>Add A New Song</h1>

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
                  placeholder="Song name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span class="error-messg"></span>
              </div>
            </div>
            <div class="flex-item">
              {/* <!--contact no field--> */}
              <div class="field-container">
                <label for="contact-no">
                  Duration: <span class="required">*</span>
                </label>
                <input
                  name="contact-no"
                  id="contact-no"
                  value={duration}
                  placeholder="Song Duration 2:00"
                  onChange={(e) => setDuration(e.target.value)}
                />
                <span class="error-messg"></span>
              </div>

              {/* <!--password field--> */}
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
