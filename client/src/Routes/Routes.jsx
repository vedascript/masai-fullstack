import React from "react";
import { Route, Switch } from "react-router-dom";
import { AlbumCard } from "../Components/AlbumCard/AlbumCard";
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
      </Switch>
    </div>
  );
};
