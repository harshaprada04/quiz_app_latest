import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

let AddRouting = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

describe("Home", () => {
  it("renders", () => {
    render(<AddRouting />);
  });
});
it("Button is disabled or not", async () => {
  render(<AddRouting />);
  expect(
    await screen.getByRole("button", {
      name: /submit/i,
    })
  ).toBeDisabled();
});

test("Form completion", async () => {
  render(<AddRouting />);
  let firstname = await screen.getByLabelText("Name");
  fireEvent.change(firstname, { target: { value: "Harsha" } });
  expect(firstname).toHaveValue("Harsha");

  let selectGender = (await screen.getByLabelText("Male")) as HTMLInputElement;
  expect(selectGender).toBeInTheDocument();
  fireEvent.click(selectGender, { checked: true });
  expect(selectGender?.value).toBe("Male");

  let selectLanguage = (await screen.getByLabelText(
    "English"
  )) as HTMLInputElement;
  expect(selectLanguage).toBeInTheDocument();
  await fireEvent.click(selectLanguage, { checked: true });
  expect(selectGender?.checked).toBe(true);

  let button = screen.getByRole("button", { name: /submit/i });
  expect(button).not.toBeDisabled();

  let click = fireEvent.click(button);
  expect(click).toBe(true);
});
