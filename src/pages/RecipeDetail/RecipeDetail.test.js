import RecipeDetail from "./RecipeDetail";
import { MemoryRouter } from "react-router-dom";
import mockData from "../../mockData";
import { render, screen } from "@testing-library/react";

const recipe = mockData.recipes[0];

describe("Recipe Detail component test", () => {
  it("should display a detailed view of a recipe", () => {
    render(
      <MemoryRouter>
        <RecipeDetail recipe={recipe} />
      </MemoryRouter>
    );
    screen.getByText("Cook brats according to package directions. Cool slightly and halve and slice.");
  });
});
