import React from "react";

import { routes } from "./routes";

import { Route, Switch } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <>
      <MyNavbar />
      <Switch>
        {routes.map((route, i) => (
          <Route exact path={route.path} component={route.component} key={i} />
        ))}
      </Switch>
    </>
  );
}

export default App;
