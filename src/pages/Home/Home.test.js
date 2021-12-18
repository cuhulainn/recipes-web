import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

it("should display a button to view all recipes", () => {
  render(<Home />);
  screen.getByText(/Show me all the recipes!/i);
});
