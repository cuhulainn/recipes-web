import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import mockAxios from "axios";
import IngredientDetailList from "./IngredientDetailList";
import mockData from "../mockData";

const mockIngredients = mockData.recipes[0].ingredients;

describe("Ingredient Detail List component test", () => {
  it("should display a detailed list of ingredients", () => {
    render(
      <MemoryRouter>
        <IngredientDetailList ingredients={mockIngredients} />
      </MemoryRouter>
    );
    screen.getByText("8 tablespoons canola oil");
  });

  // it("should display specials for ingredients that have them", async () => {
  //   mockAxios.get.mockImplementation(() => {
  //     return Promise.resolve(JSON.parse(mockData.specials));
  //   });

  //   render(
  //     <MemoryRouter>
  //       <IngredientDetailList ingredients={mockIngredients} />
  //     </MemoryRouter>
  //   );

  //   await waitFor(() => {
  //     screen.getByText("Eggs are on sale at a grocery store near you!");
  //   });
  // });
});
