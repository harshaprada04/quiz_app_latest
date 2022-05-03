import { fireEvent, getByText, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

import { act } from "react-dom/test-utils";



import HomePage from "./HomePage";


import { ContextProvider } from "../Contexts/contexts";


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

	it("matches snapshot", () => {
		const view = render(<AddRouting />);
		expect(view).toMatchSnapshot();
	});
})
it("Button is disabled or not", async () => {
  render(<AddRouting />);
  expect(
    await screen.getByRole("button", {
      name: /submit/i,
    })
  ).toBeDisabled();
});

// it("Button has click event or not", async () => {
//   render(<AddRouting />);
//   const button = await screen.getByRole("button", {name: /submit/i,})
//   const click = fireEvent.click(button)
//   expect(click).toBe(true);
// });

// test("Form completion", async () => {
//   render(<AddRouting/>)
//   let firstname = await screen.getByLabelText("First Name");
//   fireEvent.change(firstname, {target:{value:"Harsha"}})
//   expect(firstname).toHaveValue("Harsha")
//   let lastname = await screen.getByLabelText("Last Name");
//   fireEvent.change(lastname, {target:{value:"Adiga"}})
//   expect(lastname).toHaveValue("Adiga")
//   let gender = await screen.getByTestId("gender-selection");
//   let click = fireEvent.click(gender)
//   expect(click).toBe(true)
  
//   // let option = await screen.getByText("Male")
//   // fireEvent.click(option, {checked:true})
//   // expect(gender).toHaveValue("Male")
//   // fireEvent.click(gender)
//   // fireEvent.change(gender, {target:{value:"Male"}})
//   let language = await screen.getByTestId("language-selection" );
//   fireEvent.click(language)
 
//   let button = await screen.getByRole("button",{name:/submit/i})
//   expect(button).not.toBeDisabled()
// });
