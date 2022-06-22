import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import SubmitButton from "./index.js"

test('renders button', () => {
    render(<SubmitButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  