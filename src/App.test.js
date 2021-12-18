import App from "./App";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("App component tests", () => {
  it("should render the app without breaking", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
