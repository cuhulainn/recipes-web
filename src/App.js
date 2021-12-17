import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import Recipes from "./pages/Recipes/Recipes";
import MyNavbar from "./components/MyNavbar";

const url = "http://localhost:3001/recipes";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setRecipes(data);
      })
      .catch((err) => {
        console.error(`Error fetching recipes: ${err}`);
        setError(err);
      })
      .finally(setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Warming up the oven...</div>;
  }

  if (error) {
    return (
      <div>
        The cooks messed up the order! <br /> If you're a &apos;chef&apos;,
        check the console for details.
      </div>
    );
  }
  return (
    <>
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipes" render={() => <Recipes recipes={recipes} />} />
        <Route
          exact
          path="/recipe/:uuid"
          render={({ match }) => (
            <RecipeDetail id={match.params.uuid} recipes={recipes} />
          )}
        />
      </Switch>
    </>
  );
}

export default App;
