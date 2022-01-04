import App from "./App";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("App component tests", () => {
  it("should render the home page initially", () => {
    render(<App />);
    screen.getByText("improve a recipe");
  });
});
