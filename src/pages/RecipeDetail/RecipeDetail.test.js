import RecipeDetail from "./RecipeDetail";
import { MemoryRouter } from "react-router-dom";
import mockData from "../../mockData";
import { render, screen } from "@testing-library/react";

const recipes = mockData.recipes;
const id = mockData.recipes[0].uuid;

describe("Recipe Detail component test", () => {
  it("should display a detailed view of a recipe", () => {
    render(
      <MemoryRouter>
        <RecipeDetail id={id} recipes={recipes} />
      </MemoryRouter>
    );
    screen.getByText(
      "Cook brats according to package directions. Cool slightly and halve and slice."
    );
  });
});
