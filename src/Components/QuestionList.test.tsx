import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import QuestionListPage from "./QuestionListPage";

let AddRouting: any = () => {
  return (
    <BrowserRouter>
      <QuestionListPage />
    </BrowserRouter>
  );
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      prefferedLanguage: "English",
    },
  }),
}));

describe("", () => {
  it("Feteches the question data on loading", async () => {
    render(<AddRouting />);
  });
  test("main-div is there or not", async () => {
    render(<AddRouting />);
    const div = screen.getByTestId("main-div");
    expect(div).toBeInTheDocument();
  });
  it("has children", () => {
    const view = render(<AddRouting />);
    const { children } = view?.container;
    expect(children).toHaveLength(1);
  });
  it("has the page fns working", () => {
    render(<AddRouting />);

    const option = screen.getByLabelText("Bangalore") as HTMLInputElement;
    expect(option).toBeInTheDocument();
    fireEvent.click(option, { checked: true });
    expect(option?.checked).toBe(true);

    const button = screen.getByTestId("main-div") as HTMLInputElement;
    expect(button).toBeInTheDocument();
    const click = fireEvent.click(button);

    const pageNo2 = screen.getByTestId("main-1");
    expect(fireEvent.click(pageNo2)).toBe(true);

    const chooseTrue = screen.getByLabelText("True") as HTMLInputElement;
    fireEvent.click(chooseTrue, { checked: true });
    expect(chooseTrue?.checked).toBe(true);

    const pageNo3 = screen.getByTestId("main-2");
    expect(fireEvent.click(pageNo3)).toBe(true);

    const chooseFill = screen.getByPlaceholderText(
      "Please enter your answer"
    ) as HTMLInputElement;
    fireEvent.change(chooseFill, { target: { value: "Hi" } });
    expect(chooseFill?.value).toBe("Hi");

    const pageNo4 = screen.getByTestId("main-3");
    expect(fireEvent.click(pageNo4)).toBe(true);

    const chooseMatch = screen.getByLabelText(
      "a-3,b-4,c-1,d-2"
    ) as HTMLInputElement;
    fireEvent.click(chooseMatch, { checked: true });
    expect(chooseMatch?.checked).toBe(true);

    const pageNo5 = screen.getByTestId("main-4");
    expect(fireEvent.click(pageNo5)).toBe(true);

    const chooseMulti = screen.getByLabelText("Goa") as HTMLInputElement;
    fireEvent.click(chooseMulti, { checked: true });
    expect(chooseMulti?.checked).toBe(true);

    const submitButton = screen.getByTestId("btn");
    expect(submitButton).toBeInTheDocument();
    let submit = fireEvent.click(submitButton);
    expect(submit).toBe(true);
  });
});
