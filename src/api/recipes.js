import client from "./recipeClient";

const getRecipes = () => client.get("/recipes");

export default getRecipes;
