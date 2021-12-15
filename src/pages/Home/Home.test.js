import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

it("should render successfully with Recipes header", () => {
  render(<Home />);
  const recipesHeader = screen.getByText(/Recipes/i);
  expect(recipesHeader).toBeInTheDocument();
});
