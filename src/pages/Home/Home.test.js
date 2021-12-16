import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

it("should render successfully with page header", () => {
  render(<Home />);
  const recipesHeader = screen.getByText(/cook this, not that!/i);
  expect(recipesHeader).toBeInTheDocument();
});
