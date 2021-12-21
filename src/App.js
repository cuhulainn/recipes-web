import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import Recipes from "./pages/Recipes/Recipes";
import MyNavbar from "./components/MyNavbar";
import "./styles/main.scss";
import AddRecipe from "./pages/AddRecipe/AddRecipe";

function App() {
  const [recipes, setRecipes] = useState([]);

  const getRecipeData = (recipes) => {
    setRecipes(recipes);
  };

  const randomRecipeId = (recipes) => {
    const index = Math.floor(Math.random() * recipes.length);
    return recipes[index].uuid;
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
        <Route exact path="/addrecipe" render={() => <AddRecipe recipes={recipes} />} />
      </Switch>
    </React.StrictMode>
  );
}

export default App;
