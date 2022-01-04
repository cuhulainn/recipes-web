import client from "./recipeClient";

const getSpecials = () => client.get("/specials");

export default getSpecials;
