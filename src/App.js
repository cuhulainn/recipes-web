import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import Recipes from "./pages/Recipes/Recipes";
import MyNavbar from "./components/MyNavbar";
import "./styles/main.scss";

function App() {
  const [recipes, setRecipes] = useState([]);

  let getRecipeData = (recipes) => {
    setRecipes(recipes);
  };

  return (
    <React.StrictMode>
      <MyNavbar />
      <Switch>
        <Route exact path="/" render={() => <Home recipeIds={recipes.map((recipe) => recipe.uuid)} />} />
        <Route
          path="/recipes"
          render={() => <Recipes recipes={recipes} setRecipes={setRecipes} getRecipeData={getRecipeData} />}
        />
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
