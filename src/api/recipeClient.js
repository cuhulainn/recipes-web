import axios from "axios";

const recipeClient = axios.create({
  baseURL: "http://localhost:3001",
});

export default recipeClient;
