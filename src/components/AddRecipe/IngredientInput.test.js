import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import IngredientInput from "./IngredientInput";

describe("Ingredient Input component test", () => {
  it("should display inputs to enter a new ingredient", () => {
    render(
      <MemoryRouter>
        <IngredientInput inputId={1} />
      </MemoryRouter>
    );
    screen.getByText("name");
    screen.getByText("amount");
    screen.getByText("measurement");
  });
});
