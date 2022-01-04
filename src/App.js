import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import Recipes from "./pages/Recipes/Recipes";
import MyNavbar from "./components/MyNavbar";
import "./styles/main.scss";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import useApi from "./hooks/useApi";
import getRecipes from "./api/recipes";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { data: recipes, isLoading, isError, request: getRecipeData } = useApi(getRecipes, "recipes");

  useEffect(() => {
    getRecipeData();
    return () => {
      localStorage.removeItem("recipes");
    };
  }, [getRecipeData]);

  return (
    <BrowserRouter>
      <MyNavbar />
      {isLoading && <p>Page is loading</p>}
      {isError && <p>There was an error!</p>}
      {recipes && (
        <Switch>
          <Route exact path="/" render={() => <Home recipeIds={recipes.map((recipe) => recipe.uuid)} />} />
          <Route path="/recipes" render={() => <Recipes recipes={recipes} />} />
          <Route
            exact
            path="/recipe/:uuid"
            render={({ match }) => (
              <RecipeDetail recipe={recipes.filter((recipe) => recipe.uuid === match.params.uuid)[0]} />
            )}
          />
          <Route exact path="/addrecipe" render={() => <AddRecipe recipes={recipes} />} />
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default App;
