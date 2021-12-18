import { render, screen } from "@testing-library/react";
import Recipes from "./Recipes";
import mockData from "../../mockData";
import { MemoryRouter } from "react-router-dom";

const mockRecipes = mockData.recipes;

describe("Recipe List component tests", () => {
  it("should render a list of recipes", () => {
    render(
      <MemoryRouter>
        <Recipes recipes={mockRecipes} />
      </MemoryRouter>
    );
    const recipeName = screen.getByText("Italian Meatballs");
    expect(recipeName).toBeInTheDocument();
  });
});
