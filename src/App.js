import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import Recipes from "./pages/Recipes/Recipes";
import MyNavbar from "./components/MyNavbar";

function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <React.StrictMode>
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipes" render={() => <Recipes recipes={recipes} setRecipes={setRecipes} />} />
        <Route
          exact
          path="/recipe/:uuid"
          render={({ match }) => <RecipeDetail id={match.params.uuid} recipes={recipes} />}
        />
      </Switch>
    </React.StrictMode>
  );
}

export default App;
