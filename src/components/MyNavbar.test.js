import { fireEvent, render, screen } from "@testing-library/react";
import MyNavbar from "./MyNavbar";

describe("Navbar test", () => {
  it("should render the navbar title", () => {
    render(<MyNavbar />);
    screen.getByText("cook this, not that!");
  });

  it("should expand when clicked", () => {
    render(<MyNavbar />);
    const collapseButton = screen.getByRole("button");
    fireEvent.click(collapseButton);
    screen.getByText("recipe list");
  });
});
