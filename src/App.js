import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AlbumList } from "pages/AlbumList";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <AlbumList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
