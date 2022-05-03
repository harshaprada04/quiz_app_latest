import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FiilInTheBlankQuestion from "./FillInTheBlank";
import { act } from "react-dom/test-utils";

let AddRouting: any = () => {
  const baseProps: any = {
    questionDetails: {
      question: "What is the capital of India",
    },
  };
  return (
    <BrowserRouter>
      <FiilInTheBlankQuestion {...baseProps} />
    </BrowserRouter>
  );
};

test("Checking the heading", () => {
  render(<AddRouting />);
  let heading = screen.getByTestId("heading");
  expect(heading.innerHTML).toBe("What is the capital of India");
});
test("Checking the heading", async () => {
  render(<AddRouting />);
  await act(() => {
    let input = screen.getByTestId("fill-ans");
    fireEvent.change(input, { target: { value: "Hi" } });
    waitFor(() => {
      expect(input).toHaveValue("Hi");
    });
  });
});
