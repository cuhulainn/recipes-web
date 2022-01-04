import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import InstructionInput from "./InstructionInput";

describe("Instruction Input component test", () => {
  it("should display inputs to enter a new instruction", () => {
    render(
      <MemoryRouter>
        <InstructionInput inputId={1} />
      </MemoryRouter>
    );
    screen.getByText("step 2");
    screen.getByText("is this an optional step?");
  });
});
