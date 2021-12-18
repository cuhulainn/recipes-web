import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import IngredientList from "./IngredientList";
import mockData from "../mockData";

const mockIngredients = mockData.recipes[0].ingredients;

describe("Ingredient List component test", () => {
  it("should display a list of ingredients", () => {
    render(
      <MemoryRouter>
        <IngredientList ingredients={mockIngredients} />
      </MemoryRouter>
    );
    screen.getByText("queso brats");
  });
});
