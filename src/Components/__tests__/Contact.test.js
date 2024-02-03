import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  test("Should load contact us component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact component", () => {
    render(<ContactUs />);

    //const button = screen.getByRole("button");  -> one way

    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("should load input name inside contact component", () => {
    render(<ContactUs />);

    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("should load input message inside contact component", () => {
    render(<ContactUs />);

    const inputName = screen.getByPlaceholderText("message");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("should load all two inputs inside contact component", () => {
    render(<ContactUs />);

    const inputName = screen.getAllByRole("textbox");

    // Assertion
    expect(inputName.length).toBe(2);
  });
});
