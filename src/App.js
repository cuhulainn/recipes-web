import React from 'react';


import {routes} from "./routes";

import {Route, Switch,} from "react-router-dom";

function App() {
    return (
        <Switch>
            {routes.map((route, i) => (
                <Route exact path={route.path} component={route.component} key={i}/>
            ))}
        </Switch>
    );
}

export default App;
