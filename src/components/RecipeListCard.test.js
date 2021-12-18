import RecipeListCard from "./RecipeListCard";
import { MemoryRouter } from "react-router-dom";
import mockData from "../mockData";
import { render, screen } from "@testing-library/react";

const { uuid, title, description, images, ingredients } = mockData.recipes[0];

describe("Recipe List Card component tests", () => {
  it("should display the recipe name", () => {
    render(
      <MemoryRouter>
        <RecipeListCard
          uuid={uuid}
          title={title}
          description={description}
          images={images}
          ingredients={ingredients}
        />
      </MemoryRouter>
    );
    screen.getByText("Queso Brat Scramble");
  });
});
