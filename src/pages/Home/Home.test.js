import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

it("should render successfully with page header", () => {
  render(<Home />);
  const recipesHeader = screen.getByText(/Show me all the recipes!/i);
  expect(recipesHeader).toBeInTheDocument();
});
