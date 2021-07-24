import React from "react";
import { Route, Switch } from "react-router-dom";
import { AlbumCard } from "../Components/AlbumCard/AlbumCard";
import { AlbumForm } from "../Components/AlbumForm/AlbumForm";
import { ArtistLogin } from "../Components/ArtistLogin/ArtistLogin";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import { SongForm } from "../Components/SongForm/SongForm";
import { SongsList } from "../Components/SongsList/SongsList";
import { Home } from "../Pages/Home";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/songs/:id">
          <SongsList />
        </Route>
        <Route exact path="/artist/login">
          <ArtistLogin />
        </Route>
        <Route exact path="/artist/:id">
          <Dashboard />
        </Route>
        <Route exact path="/albumform/:id">
          <AlbumForm />
        </Route>
        <Route exact path="/songform/:id">
          <SongForm />
        </Route>
      </Switch>
    </div>
  );
};
