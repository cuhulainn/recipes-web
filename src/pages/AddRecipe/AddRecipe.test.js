import React from "react";
import { render, screen } from "@testing-library/react";
import AddRecipe from "./AddRecipe";
import { MemoryRouter } from "react-router-dom";

it("should display a button to view all recipes", () => {
  render(
    <MemoryRouter>
      <AddRecipe />
    </MemoryRouter>
  );
  screen.getByText(/add your recipe to our collection!/i);
});
