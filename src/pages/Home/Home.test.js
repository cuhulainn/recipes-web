import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";
import mockData from "../../mockData";

const mockRecipeIds = mockData.recipes.map((recipe) => recipe.uuid);

it("should display a button to view all recipes", () => {
  render(
    <MemoryRouter>
      <Home recipeIds={mockRecipeIds} />
    </MemoryRouter>
  );
  screen.getByText(/check out all our recipes/i);
});
