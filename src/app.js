import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StoreContext } from "storeon/react";
import { store } from "./store";
import Home from "./views/home/home";
import Name from "./views/namePlayers/namePlayers";
import Tillval from "./views/opcion.js/opcion";

export default function BasicExample() {
  return (
    <StoreContext.Provider value={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/name" component={Name} />
          <Route exact path="/tillval" component={Tillval} />
        </Switch>
      </Router>
    </StoreContext.Provider>
  );
}
