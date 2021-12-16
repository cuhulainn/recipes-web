import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";

export const routes = [
  // Put your routes here
  {
    path: "/",
    component: Home,
  },
  {
    path: "/recipes",
    component: Recipes,
  },
];
